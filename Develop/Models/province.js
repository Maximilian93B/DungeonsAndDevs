module.exports = (sequelize, DataTypes) => {
  const { Model } = require('sequelize');
  
  class Province extends Model {}

  Province.init({
    province_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    territory_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'territories', // This should match the table name exactly as it is in the database.
        key: 'territory_id',
      }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    }
  }, {
    sequelize,
    modelName: 'Province',
    tableName: 'provinces',
    timestamps: false // No timestamps in tables
  });

  Province.associate = (models) => {
    Province.belongsTo(models.Territory, { foreignKey: 'territory_id' });
    // Ensure the model name matches exactly as it's defined for challenges.
    Province.hasMany(models.Challenge, { foreignKey: 'province_id' }); // Adjusted model name to singular as per Sequelize convention
  };

  return Province;
};
