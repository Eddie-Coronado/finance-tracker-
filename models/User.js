const bcrypt = require('bcrypt'); // npm install bcrypt.js
const sequelize = require('../config/connection');
const model = require('sequelize');
const Datatype = require('sequelize');
const { beforeCreate } = require('../config/connection');

class User extends model {
    recallPassword(userPW) {
        let comparePW = bcrypt.compareSync(userPW, this.password);
        return comparePW;
    }
};

User.init(
    {
        id: {
            type: DataType.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: Datatype.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [10],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(login) {
                login.password = await bcrypt.hash(login.password, 10);
                return login;
            }, 
        },
        sequelize,
        timestamps: false,
        freezTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

model.exports = User;