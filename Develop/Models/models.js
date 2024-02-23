// Impport sequelize connection and Module 
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');


// Import all of our Models 
const Territory = require('./territory')(sequelize, Sequelize.DataTypes);
const Achievement = require('./achievement')(sequelize, Sequelize.DataTypes);
const Challenge = require('./challenge')(sequelize, Sequelize.DataTypes);
const Province = require('./province')(sequelize, Sequelize.DataTypes);
const Trophy = require('./trophy')(sequelize, Sequelize.DataTypes);
const User = require('./User')(sequelize, Sequelize.DataTypes);
const UserProfile = require('./userProfile')(sequelize, Sequelize.DataTypes);
const UserProgress = require('./userProgress')(sequelize, Sequelize.DataTypes);
const UserTerritory = require('./userTerritory')(sequelize, Sequelize.DataTypes);
const UserTrophies = require('./userTrophies')(sequelize, Sequelize.DataTypes);

// Set associations in this file as all Models are in one location 

// 1. Users to Territories through UserTerritories
User.belongsToMany(Territory, { through: 'UserTerritories', foreignKey: 'user_id', otherKey: 'territory_id' });
Territory.belongsToMany(User, { through: 'UserTerritories', foreignKey: 'territory_id', otherKey: 'user_id' });

// 2. Users to Challenges through UserProgress
User.belongsToMany(Challenge, { through: 'UserProgress', foreignKey: 'user_id', otherKey: 'challenge_id' });
Challenge.belongsToMany(User, { through: 'UserProgress', foreignKey: 'challenge_id', otherKey: 'user_id' });

// 3. Territories to Provinces
Territory.hasMany(Province, { foreignKey: 'territory_id' });
Province.belongsTo(Territory, { foreignKey: 'territory_id' });

// 4. Provinces to Challenges
Province.hasMany(Challenge, { foreignKey: 'province_id' });
Challenge.belongsTo(Province, { foreignKey: 'province_id' });

// 5. Users to Trophies through UserAchievements
User.belongsToMany(Trophy, { through: 'UserAchievements', foreignKey: 'user_id', otherKey: 'trophy_id' });
Trophy.belongsToMany(User, { through: 'UserAchievements', foreignKey: 'trophy_id', otherKey: 'user_id' });

// 6. UserProfile Associations (example, adjust based on actual logic)
UserProfile.belongsTo(User, { foreignKey: 'user_id' });
UserProfile.belongsTo(Territory, { foreignKey: 'territory_id' });
UserProfile.belongsTo(Challenge, { foreignKey: 'challenge_id' });



module.exports = {  
  Territory,
  Achievement,
  Challenge,
  Province,
  Trophy, 
  User, // Export other models here
  UserProfile,
  UserProgress,
  UserTerritory,
  UserTrophies,
};
