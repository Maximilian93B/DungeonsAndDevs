module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcryptjs');
  const { Model } = require('sequelize');

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
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      set(val) {
        // handle converting usernames to lowercase before storing 
        this.setDataValue('username', val.toLowerCase());
      }
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(60), // Adjust the length according to your hashing algorithm's output
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    sign_up_date: {
      type: DataTypes.DATE
    },
    last_login: {
      type: DataTypes.DATE
    },
    profile: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  // Define associations within the exported function
  User.associate = (models) => {
    User.hasMany(models.UserProgress, { foreignKey: 'user_id' });
    User.hasMany(models.UserAchievement, { foreignKey: 'user_id' }); // Ensure the model name is singular if that's how you've defined it
    User.hasMany(models.UserTerritory, { foreignKey: 'user_id' });
    User.hasMany(models.UserProfile, { foreignKey: 'user_id'})
    // Add other associations as necessary, ensuring model names are correctly referenced
  };

  return User;
};
