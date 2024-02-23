const User = require('./User');
const UserProfile = require('./userProfile');



//  User Associations 
User.hasMany(models.UserProfile, { foreignKey: 'user_id' });
User.hasMany(models.UserProgress, { foreignKey: 'user_id' });
User.hasMany(models.UserAchievements, { foreignKey: 'user_id' });
User.hasMany(models.UserTerritories, { foreignKey: 'user_id' });