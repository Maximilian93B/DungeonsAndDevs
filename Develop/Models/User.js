const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcryptjs');

class User extends Model {
  // Method to verify passwords
  validPassword(password) {
    return bcrypt.compareSync(password, this.Password);
  }
}

User.init({
  // Define fields/columns on model
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id' // Specify the snake_case database field name
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    field: 'username' // Specify the snake_case database field name
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
    field: 'email' // Specify the snake_case database field name
  },
  password: {
    type: DataTypes.STRING(60), // Adjust the length according to your hashing algorithm's output
    allowNull: false,
    field: 'password' // Specify the snake_case database field name
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'points' // Specify the snake_case database field name
  },
  sign_up_date: {
    type: DataTypes.DATE,
    field: 'sign_up_date' // Specify the snake_case database field name
  },
  last_login: {
    type: DataTypes.DATE,
    field: 'last_login' // Specify the snake_case database field name
  },
  profile: {
    type: DataTypes.TEXT,
    field: 'profile' // Specify the snake_case database field name
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  hooks: {
    beforeCreate: (user) => {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    },
    beforeUpdate: (user) => {
      if (user.changed('password')) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      }
    }
  },
  timestamps: true,
  underscored: true,
  tableName: 'Users'
});

// Define associations
User.associate = (models) => {
  User.hasMany(models.UserProgress, { foreignKey: 'userID' }); // Use snake_case for foreign key
  User.hasMany(models.UserAchievements, { foreignKey: 'userID' }); // Use snake_case for foreign key
  User.hasMany(models.UserTerritories, { foreignKey: 'userID' }); // Use snake_case for foreign key
  User.hasMany(models.UserQuizAttempts, { foreignKey: 'userID' }); // Use snake_case for foreign key
  User.hasMany(models.Posts, { foreignKey: 'userID' }); // Use snake_case for foreign key
  User.belongsToMany(models.LearningGroups, { through: models.GroupMembers, foreignKey: 'userID' }); // Use snake_case for foreign key
};

module.exports = {User};
