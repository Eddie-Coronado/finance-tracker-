const express = require('express');
const session = require ('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const plaid = require('plaid');

const routes = require('./controllers');
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3306;

const sesh = {
    secret: 'Secret',
    cokkie: {},
    resave: true,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sesh));

const hbs = exphbs.create({helpers});

app.engine('handlebars', 'main');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use(routes);

sequelize.sync({ force: false}).then( () => {
    app.listen(PORT, () => console.log('Now listening on PORT 3306'))
});