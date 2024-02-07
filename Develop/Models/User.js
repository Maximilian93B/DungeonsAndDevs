const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {
  // Set method to verify passwords 
  validPassword(password) {
    return bcrypt.compareSync(password, this.Password);
  }
}

User.init({
  // Define fields/columns on model
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
  sequelize,
  modelName: 'User',
  hooks: {
    beforeCreate: (user) => {
      user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10));
    },
    beforeUpdate: (user) => {
      if (user.changed('Password')) {
        user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10));
      }
    }
  },
  timestamps: true,
  underscored: true,
  tableName: 'Users'
});

// Define associations
User.associate = (models) => {
  User.hasMany(models.UserProgress, { foreignKey: 'UserID' });
  User.hasMany(models.UserAchievements, { foreignKey: 'UserID' });
  User.hasMany(models.UserTerritories, { foreignKey: 'UserID' });
  User.hasMany(models.UserQuizAttempts, { foreignKey: 'UserID' });
  User.hasMany(models.Posts, { foreignKey: 'UserID' });
  User.belongsToMany(models.LearningGroups, { through: models.GroupMembers, foreignKey: 'UserID' });
};

module.exports = User;


