const { Finance } = require('../models');

const financedata = [
  {
    category: 'Gas',
    timestamp: '1/1/2021',
    amount: 45,
  },
  {
    category: 'Food',
    timestamp: '1/2/2021',
    amount: 100,
  },
  {
    category: 'Gym',
    timestamp: '1/2/2021',
    amount: 50,
  }
];

const seedFinance = () => Finance.bulkCreate(financedata);

module.exports = seedFinance;
