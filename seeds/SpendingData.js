 const { Spending } = require('../models');

 const spendingData = 
[
  {
    bucket: 1,
    description: 'Rent',
    timestamp: '1/1/2021',
    finance_id: 1,
    amount: 1400,
  },
  {
    bucket: 2,
    description: 'Groceries',
    timestamp: '1/2/2021',
    finance_id: 2,
    amount: 200,
  },
  {
    bucket: 3,
    description: 'Restaurants',
    timestamp: '1/3/2021',
    finance_id: 3,
    amount: 300,
  },

];

 const seedSpending = () => Spending.bulkCreate(spendingData);

 module.exports = seedSpending;