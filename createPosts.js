// createPosts.js

const { Post } = require('./models');

const createPosts = async () => {
  try {
    await Post.bulkCreate([
      {
        description: 'First post!',
        user_id: 1,
        image: 'post1.jpg',
      },
      {
        description: 'Hello world!',
        user_id: 2,
        image: 'post2.jpg',
      },
      {
        description: 'My post my rules!',
        user_id: 1,
        image: 'post3.jpg',
      },
      {
        description: 'Say hi to my puppy!',
        user_id: 3,
        image: 'post4.jpg',
      },
      {
        description: 'What a wonderful world!',
        user_id: 4,
        image: 'post5.jpg',
      },
      {
        description: 'Shine bright like a dimon',
        user_id: 3,
        image: 'post6.jpg',
      },
      {
        description: 'Go home yankees!',
        user_id: 1,
        image: 'post7.jpg',
      },
      {
        description: 'Go for glory!',
        user_id: 4,
        image: 'post8.jpg',
      }
      // Add more posts as needed
    ]);
    console.log('Posts created successfully');
  } catch (error) {
    console.error('Error creating posts:', error);
  }
};

createPosts();
