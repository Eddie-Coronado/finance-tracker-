// These routes are meant to handle the login/logout/create user pages

const router = require('express').Router();

// Route to login 
router.post('/login', async (req, res) => {
    try{
        const collectedUserData = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        const userPW = await collectedUserData.recallPassword(re.body,password);// figure out how to hide password;\;
        
        if(!userEmail) {
            res.status(404).json({
                message: 'Invalid email or password.'
            });
            return;
        };

        if (!userPW) {
            res.status(404).json({
                message: 'Invalid email or password.'
            });
            return;
        }

        req.session.save( () => {
            req.session.loggedIn = true;

            res.status(200).json({ user: userEmail, message: 'Currently logged in'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route to logout
router.post('/logout', (req, res) => {

    if (req.session.loggedIn) {
        res.session.destroy( () => {
            res.status(204).end();
        });

    } else {
        res.status(404).end();
    }
});

// Route to create a new User
router.post('/', async (req, res) => {
    try {
        const collectedUserData = await USer.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save( () => {
            req.session.loggedIn = true;

            res.status(200).json(collectedUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});