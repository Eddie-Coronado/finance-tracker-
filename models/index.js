const User = require('./User');
const Finance = require('./Finance');
const Spending = require('./Spending');

Finance.hasMany(Spending, {
  foreignKey: 'finance_id',
});

Spending.belongsTo(Finance, {
  foreignKey: 'finance_id',
});

module.exports = { User, Finance, Spending };