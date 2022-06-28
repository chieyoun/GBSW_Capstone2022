const dotenv = require('dotenv');
dotenv.config();

<<<<<<< Updated upstream
const config = {
  development : {
    username : "root",
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    host : process.env.HOST,
    port : process.env.PORT,
    dialect : "mysql"
  }
}

module.exports = config;
=======
const development = {
  username: "root",
  password: env.MYSQL_PASSWORD,
  database: "capstonedb",
  host: "localhost",
  dialect: "mysql",
  port: 3307,
  timezone : "+09:00",
  dialectOptions: {
    charset: 'utf8mb4',
    dateStrings: true,
    typeCast: true
  },
  define: {
    timestamps: true
  }
};

const production = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const test = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE_TEST,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

module.exports = { development, production, test };
>>>>>>> Stashed changes
