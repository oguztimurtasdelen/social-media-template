// createUsers.js

const { User } = require('./models');

const createUsers = async () => {
  try {
    await User.bulkCreate([
      {
        username: 'john_doe',
        email: 'johndoe@example.com',
        full_name: 'John Doe',
        profile_picture: 'profile1.jpg',
        bio: 'Hello, I am John!',
      },
      {
        username: 'jane_doe',
        email: 'janedoe@example.com',
        full_name: 'Jane Doe',
        profile_picture: 'profile2.jpg',
        bio: 'Hello, My name is Jane!',
      },
      {
        username: 'jane_smith',
        email: 'janesmith@example.com',
        full_name: 'Jane Smith',
        profile_picture: 'profile3.jpg',
        bio: 'Nice to meet you!',
      },
      {
        username: 'oguztasdelen',
        email: 'oguztasdelen@example.com',
        full_name: 'Oğuz Timur Taşdelen',
        profile_picture: 'profile4.jpg',
        bio: 'Say hi to me!',
      },
      // Add more users as needed
    ]);
    console.log('Users created successfully');
  } catch (error) {
    console.error('Error creating users:', error);
  }
};

createUsers();
