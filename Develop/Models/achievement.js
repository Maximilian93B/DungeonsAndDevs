module.exports = (sequelize, DataTypes) => {
    const { Model } = require('sequelize');
  
    class Achievement extends Model {}
  
    Achievement.init({
      // Model attributes
      achievement_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // This should match the table name exactly as it is in the database.
          key: 'user_id',
        }
      },
      trophy_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'trophies', // This should match the table name exactly as it is in the database.
          key: 'trophy_id',
        }
      },
      date_earned: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      // Model options
      sequelize,
      modelName: 'Achievement',
      tableName: 'user_achievements',
      timestamps: false,
      underscored: true,
    });
  
    Achievement.associate = (models) => {
      Achievement.belongsTo(models.User, { foreignKey: 'user_id' });
      Achievement.belongsTo(models.Trophy, { foreignKey: 'trophy_id' });
    };
  
    return Achievement;
  };
  