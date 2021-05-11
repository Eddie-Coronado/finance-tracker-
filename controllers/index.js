const router = require('express').Router();

const userpageRoutes = require('./userpage-routes');
const homepageRoutes = require('./homepage-routes');

router.use('/', homeroutes);
router.use('/users', userRoutes);

module.exports = router;