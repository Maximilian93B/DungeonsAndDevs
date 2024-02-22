const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');


// Need  to import Othe Models for now 




class User extends Model {
  // Method to verify passwords
  validPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}  

User.init({
  // Define fields/columns of User
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id'
    
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    field:'username',
    set(val) {
      // handle converting usernames to lowercase before storing 
      this.setDataValue('username', val.toLowerCase());
    }
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    field:'email'
  },
  password: {
    type: DataTypes.STRING(60), // Adjust the length according to your hashing algorithm's output
    allowNull: false,
    field:'password'
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field:'points'
  },
  sign_up_date: {
    type: DataTypes.DATE,
    field:'sign_up_date'
  },
  last_login: {
    type: DataTypes.DATE,
    field:'last_login'
  },
  profile: {
    type: DataTypes.TEXT,
    field:'profile'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

// Define associations
User.associate = (models) => {
  User.hasMany(UserProgress, { foreignKey: 'user_id' });
  User.hasMany(UserAchievements, { foreignKey: 'user_id' });
  User.hasMany(UserTerritories, { foreignKey: 'user_id' });
};

module.exports = { User };
