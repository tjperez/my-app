const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('users', {
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
},
{
    timestamps: false
});

module.exports = User;