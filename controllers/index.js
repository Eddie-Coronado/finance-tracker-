const router = require('express').Router();

const userpageRoutes = require('./userpage-routes');
const homepageRoutes = require('./homepage-routes');

router.use('/home', homepageRoutes);
router.use('/', userpageRoutes);

module.exports = router;