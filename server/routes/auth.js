const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const controller = require('../controllers/auth.controller');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { User } = require('../models');

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
    },
  }),
  limits : { fileSize: 5 * 1024 * 1024 },
})

router.post('/join', isNotLoggedIn, controller.join);
router.post('/login', isNotLoggedIn, controller.login);
router.get('/logout', isLoggedIn, controller.logout);


router.get('/get', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({users});
  } catch( err ){ 
    console.error(err);
  }
})


module.exports = router;
