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
    field:'username'
   
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
