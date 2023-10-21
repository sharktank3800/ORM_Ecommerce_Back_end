// require the dotenv module 
require('dotenv').config();

// require the sequelize module
const Sequelize = require('sequelize');

// create new instance of sequelize 
// connect to database 
// JAWSDB_URL if available or use DB_NAME, _USER, _PASSWORD variables to connect to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    // export sequelize instance
module.exports = sequelize;
