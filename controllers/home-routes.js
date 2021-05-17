const router = require('express').Router();

const { Finance, Spending } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET spending for homepage
router.get('/', async (req, res) => {
  try {
    const dbFiananceData = await Gallery.findAll({
      include: [
        {
          model: finance,
          attributes: ['bicket', 'category', 'amount'],
        },
      ],
    });

    const finanaces = dbFiananceData.map((finance) =>
      finance.get({ plain: true })
    );

    res.render('homepage', {
      finanaces,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use the custom middleware before allowing the user to access the gallery
router.get('/Finance/:id', withAuth, async (req, res) => {
  try {
    const dbGFinanceData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Spending,
          attributes: [
            'bucket',
            'timestamp',
            'description',
            'amount',
          ],
        },
      ],
    });

    const finance = dbGFinanceData.get({ plain: true });
    res.render('finance', { finance, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use the custom middleware before allowing the user to access the main page
router.get('/spending/:id', withAuth, async (req, res) => {
  try {
    const dbSpendingata = await Painting.findByPk(req.params.id);

    const spending = dbSpendingata.get({ plain: true });

    res.render('painting', { spending, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
