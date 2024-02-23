module.exports = (sequelize, DataTypes) => {
    const { Model } = require('sequelize');
  
    class Territory extends Model {}
  
    Territory.init({
      // Model attributes
      territory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(255), // Adjusted length for potential longer descriptions
      },
      icon: {
        type: DataTypes.STRING(255), // Adjusted length for potential file paths or URLs
        allowNull: true,
      }
    }, {
      // Model options
      sequelize,
      modelName: 'Territory',
      tableName: 'territories',
      timestamps: false,
      underscored: true,
    });
  
    Territory.associate = (models) => {
      // Associations can be defined here
      Territory.hasMany(models.Province, { foreignKey: 'territory_id' });
      Territory.hasOne(models.Trophy, { foreignKey: 'territory_id' });
      Territory.hasMany(models.UserTerritory, { foreignKey: 'territory_id' });
    };
  
    return Territory;
  };
  