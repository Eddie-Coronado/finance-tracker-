const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
const sequelize = require('../config/connection');
const seedFinance = require('../seeds/financeData');
const seedSpending = require('../seeds/SpendingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFinance();

  await seedSpending();

  process.exit(0);
};

seedAll();