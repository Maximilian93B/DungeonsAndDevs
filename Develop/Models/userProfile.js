
module.exports = (sequelize, DataTypes) => {
 const { Model } = require('sequelize');
  
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


  // Association to User 
  UserProfile.associate = (models) => {
    // Association back to User
    UserProfile.belongsTo(models.User, { foreignKey: 'user_id' });
   /*
    UserProfile.belongsTo(Model.User, { foreignKey: 'user_id' });
   //  Trophy association 
    UserProfile.belongsTo(Model.Trophy, {through: 'user_trophies', foreignKey: 'profile_id', otherKey: 'trophy_id' });
    // Your other associations can remain as defined
    */
  };
  
  return UserProfile;
};



