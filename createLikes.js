// createLikes.js

const { Like } = require('./models');

const createLikes = async () => {
  try {
    await Like.bulkCreate([
      {
        post_id: 2,
        user_id: 1,
      },
      {
        post_id: 4,
        user_id: 1,
      },
      {
        post_id: 8,
        user_id: 1,
      },
      {
        post_id: 1,
        user_id: 2,
      },
      {
        post_id: 3,
        user_id: 2,
      },
      {
        post_id: 4,
        user_id: 2,
      },
      {
        post_id: 5,
        user_id: 2,
      },
      {
        post_id: 3,
        user_id: 3,
      },
      {
        post_id: 7,
        user_id: 3,
      },
      {
        post_id: 6,
        user_id: 3,
      },
      {
        post_id: 3,
        user_id: 4,
      },
      {
        post_id: 1,
        user_id: 4,
      },
      {
        post_id: 7,
        user_id: 4,
      },
      {
        post_id: 7,
        user_id: 4,
      },
      {
        post_id: 4,
        user_id: 4,
      }
      // Add more likes as needed
    ]);
    console.log('Likes created successfully');
  } catch (error) {
    console.error('Error creating likes:', error);
  }
};

createLikes();
