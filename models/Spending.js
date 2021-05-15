const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spending extends Model {}

Spending.init(
  {
    bucket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    sequelize,
    timestamp: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'spending',
  }
);

module.exports = Spending;
