const express = require('express');
<<<<<<< Updated upstream
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, board } = require('../models'); 
const router = express.Router(); 


//회원가입 api
router.post('/signup', async (req, res, next) => {
  const { email, name, password } = req.body;
  

  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      res.status(409).json({ error: '중복되는 이메일입니다.' });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      name,
      password: hash,
    });
    return res.status(200).json({success: 'true'});
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

//로그인 api
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  
  User.findOne({
    where: {
      email,
=======
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const controller = require('../controllers/auth.controller');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

try {
  fs.readdirSync('profiles');
} catch (err) {
  console.error('profiles 폴더가 없어 profiles 폴더를 생성합니다');
  fs.mkdirSync('profiles')
}

const upload = multer({
  storage : multer.diskStorage({
    destination(req, file, cb){
      cb(null, 'profiles/');
    },
    filename(req, file, cb){
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
>>>>>>> Stashed changes
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).json({ emailnotfound: '이메일 틀림' });
    }
    // password 비교
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          {
            // token의 지속시간
            expiresIn: '3h',
          },
          (err, token) => {
            res.cookie('token', token);

            res.json({
              name: user.name,
              id: user.id,
              token: token,
            });
          },
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: '비밀번호 틀림' });
      }
    });
  });
});

router.get('/logout', function (req, res) {
  res.clearCookie('token');
  res.json({ success: 'logout ok' });
});


module.exports = router;