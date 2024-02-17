// Model for province ( Quests )

const { Model , DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

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
      model: 'territories', // Name of the table
      key: 'territory_id', // Key in the table to reference
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
  Province.hasMany(models.Challenge, { foreignKey: 'provinceId' }); // Use snake_case for foreign key
}

module.exports =  { Province };
