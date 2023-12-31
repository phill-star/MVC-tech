const { Comment } = require('../models');

const commentData = [{
        comment_text: "forever young",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "NFL starts soon",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "today is a new day",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;