// These routes are meant to handle the login/logout/create user pages

const router = require('express').Router();



// Route to login page
router.post('/login', async (req, res) => {
    try{
        const userEmail = await User.findOne({
            where: {
                email: req.params.email,
            }
        });

        const userPassword = '';// figure out how to hide password;\;
        
        if(!userEmail) {
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