const express = require('express');
const session = require ('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3306;

const sesh = {
// I am uncertain on how to create a new session object/variable thing...
// I just know that its what holds the cookies and stores them
};

app.use(session(sesh));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false}).then( () => {
    app.listen(PORT, () => console.log('Now listening ...'))
});