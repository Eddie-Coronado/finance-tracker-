// These routes are meant to handle the login/logout/create user pages
const router = require('express').Router();
const { User } = require('../../models/user');

// router.post('/create_link_token', async (req, res) => {
//     try {
//         const user = await User.find(...req);
//         const clientUserID = user.id;

//         const tokenResponse = await client.createLinkToken({
//             user: {
//                 client_user_id: clientUserID,
//             },
//             client_name: 'Plaid Test App',
//             products:['auth'],
//             country_codes: ['US'],
//             language: 'en',
//             webhook: 'https://webhook.sample.com'
//         });

//         response.json(tokenResponse);
//     } catch (err) {
//         return res.send({error: err.message});
//     }
// });

// router.post('/exchange_public_token', async (req, res) => {
//     try {
//         const publicToken = req.body.public_token;

//         const tokenResponse = await client.exchangePublicToken(publicToken);
//         // const {accounts, item} = await client.getAccounts(tokenResponse);

//         const accessToken = tokenResponse.access_token;
//         const itemId = tokenResponse.item_id;

//         // console.log({accounts, item})
//     } catch (err) {
//         return res.send({error: err.message});
//     }
// });

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You have succesfully logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;