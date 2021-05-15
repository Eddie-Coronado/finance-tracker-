const { Spending } = require('../models');

const SpendingData = [
  {
    name: 'Shell',
    timestamp: '1/1/2021',
    amount: 45,
  },
  {
    name: 'Target',
    timestamp: 'May 1, 2021',
    amount: 100,
  },
  {
    nname: 'Gym',
    timestamp: '1/2/2021',
    amount: 50,
  }
];

const seedSpending = () => Finance.bulkCreate(SpendingData);

module.exports = seedSpending;