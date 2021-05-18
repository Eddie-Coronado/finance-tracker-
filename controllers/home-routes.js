const router = require('express').Router();

const { finance, Spending } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET spending for homepage
router.get('/', async (req, res) => {
  try {
    const dbFiananceData = await finance.findAll({
      include: [
        {
          model: finance,
          attributes: ['bucket', 'category', 'amount'],
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

// Use the custom middleware before allowing the user to access the Finance
router.get('/Finance/:id', withAuth, async (req, res) => {
  try {
    const dbGFinanceData = await Finance.findByPk(req.params.id, {
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
    const dbSpendingata = await Spending.findByPk(req.params.id);

    const spending = dbSpendingata.get({ plain: true });

    res.render('spending', { spending, loggedIn: req.session.loggedIn });
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