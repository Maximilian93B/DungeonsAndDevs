// Model for userachievements

const { Model , DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class userAchievements extends Model {}

userAchievements.init({
  userAchievements_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'user', // Name of the table
        key: 'user_id', // Key in the table to reference
      }
 
  },
  description: {
    type: DataTypes.STRING(50),
},
  date_earned: {
    type: DataTypes.TEXT
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'userAchievements',
  tableName: 'userAchievements',
  timestamps: false // No timestamps in tables
});

module.exports =  { userAchievements };
