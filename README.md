Step 1. npm install

It is assumed that the database structure complies with the project instructions.
OR 
run code blocks below
• npx sequelize-cli model:generate --name User --attributes username:string,email:string,full_name:string,bio:string
• npx sequelize-cli model:generate --name Follow --attributes follower_id:integer,following_id:integer
• npx sequelize-cli model:generate --name Post --attributes description:string,user_id:integer,image:string
• npx sequelize-cli model:generate --name Like --attributes post_id:integer,user_id:integer
• npx sequelize-cli db:migrate
• node createUsers.js
• node createFollows.js
• node createPosts.js
• node createLikes.js

Step 2. npm run start:server

Test: You can use http://localhost:3000/posts/get-posts AND http://localhost:3000/posts/merge-posts end-points on Postman or etc.


Question 1: ./controllers/postController.js => getPosts()

Question 2: ./controllers/postController.js => mergePosts()