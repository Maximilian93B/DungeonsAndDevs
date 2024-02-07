const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

//This is the Model for Users 

class User extends Model {}

User.init({
    // Define fields/columns on model
    // This is used to define the models schema 
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    SignUpDate: {
      type: DataTypes.DATE
    },
    LastLogin: {
      type: DataTypes.DATE
    },
    Profile: {
      type: DataTypes.TEXT
    }
  }, {
    // Link Sequelize connection
    sequelize,

    timestamps: false,
    underscored: true, //ensures any camelCased columns are coverted to snake_case. 
    modelName:'User',
    TableName: 'Users'
  });

  module.exports = User;

