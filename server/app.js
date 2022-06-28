const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
<<<<<<< Updated upstream
const logger = require('morgan');
=======
const passport = require('passport');
const cors = require('cors');
const helmet = require('helmet');
>>>>>>> Stashed changes
require('dotenv').config();

// 추가
const authRouter = require('./routes/auth');
const boardRouter = require('./routes/board');
const userRouter = require('./routes/user');

const { sequelize } = require('./models');

<<<<<<< Updated upstream
const app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
=======
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> Stashed changes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
      httpOnly: true,
      secure: false
  },
  name: 'session-cookie'
}));


<<<<<<< Updated upstream

// 추가
app.use('/auth', authRouter);
app.use('/board', boardRouter);
app.use('/user', userRouter);
=======
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
>>>>>>> Stashed changes

app.listen(3002, (req, res) => {
  console.log('listening on http://localhost:3000');
})

//port 3002