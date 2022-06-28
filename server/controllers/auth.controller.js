const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../models');


const join = async (req, res, next) => {
  const { idx, name, password, birthday } = req.body;
  try {
    const exUser = await User.findOne({ where: { idx }});
    if(exUser) {
      return res.status(400).json({message : "이메일이 존재합니다"});
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      idx,
      name,
      password: hash,
      img : req.file.path,
      birthday,
    });
    res.status(200).json({success : "회원가입 성공"})
  } catch (err) {
    console.error(err);
    return next(error);
  }
}


const login = async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.status(400).json({message : "유저정보 다름"});
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.status(200).json({success: "로그인 성공"});
    });
  })(req, res, next);
}


const logout = (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.status(200).json({message : "로그아웃 성공"});
}

module.exports = { join, login, logout };