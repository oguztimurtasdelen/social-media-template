// createFollows.js

const { Follow } = require('./models');

const createFollows = async () => {
  try {
    await Follow.bulkCreate([
      {
        follower_id: 1,
        following_id: 2,
        created_at: null,
      },
      {
        follower_id: 1,
        following_id: 3,
        created_at: null,
      },
      {
        follower_id: 2,
        following_id: 1,
        created_at: null,
      },
      {
        follower_id: 2,
        following_id: 3,
        created_at: null,
      },
      {
        follower_id: 2,
        following_id: 4,
        created_at: null,
      },
      {
        follower_id: 3,
        following_id: 1,
        created_at: null,
      },
      {
        follower_id: 4,
        following_id: 2,
        created_at: null,
      },
      {
        follower_id: 4,
        following_id: 3,
        created_at: null,
      }

      // Add more follows as needed
    ]);
    console.log('Follows created successfully');
  } catch (error) {
    console.error('Error creating follows:', error);
  }
};

createFollows();
