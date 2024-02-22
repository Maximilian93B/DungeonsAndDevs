const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//UserProfile Class 
class UserProfile extends Model{} 

UserProfile.init({
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // name of the Users table
          key: 'user_id'
        }
      },
      territory_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'territories', // name of the Territories table
          key: 'territory_id'
        }
      },
     challenge_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'challenges', // name of the Challenges table
          key: 'challenge_id'
        }
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'UserProfile',
      tableName: 'user_profile',
      timestamps: false,
      underscored: true // Assuming you don't have createdAt and updatedAt fields
});

UserProfile.associate = (models) => {
 
  // For example, if a UserProfile belongs to a User
  UserProfile.belongsTo(models.User, { foreignKey: 'user_id' });

  // Assuming you have a Trophies model and a many-to-many relationship through user_trophies
  UserProfile.belongsToMany(models.Trophy, { through: 'user_trophies', foreignKey: 'user_profile_id', otherKey: 'trophy_id' });
};


module.exports =  { UserProfile };


