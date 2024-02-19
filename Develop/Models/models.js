const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


const Territory = require('./territory')(sequelize, Sequelize.DataTypes);



module.exports = {  
  Territory,
  // Export other models here
};
