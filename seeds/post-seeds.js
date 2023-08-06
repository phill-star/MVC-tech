const { Post } = require('../models');

const postData = [{
        title: 'test1',
        content: 'hello.',
        user_id: 1

    },
    {
        title: 'test2',
        content: 'world',
        user_id: 2
    },
    {
        title: 'test3',
        content: 'hello world.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;