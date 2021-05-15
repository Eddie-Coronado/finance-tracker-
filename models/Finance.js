const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Finance extends Model {}

Finance.init(
  {
    bucket: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'finance',
  }
);

module.exports = Finance;

