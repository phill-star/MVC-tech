const { User } = require('../models');

const userData = [{
        username: 'mohamed1',
        password: 'mohamed123'

    },
    {
        username: 'mohamed',
        password: '123456789'
    },
    {
        username: 'mohamed',
        password: 'mohamed1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;