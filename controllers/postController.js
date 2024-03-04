const { Post, User, sequelize } = require('../models');
const postQueries = require('../queries/postQueries');

exports.getPosts = async (req, res, next) => {
    const user_id = req.body.user_id;
    const post_ids = req.body.post_ids;

    const query_get_posts = postQueries.getPosts;

    const posts = await sequelize.query(query_get_posts, {
        replacements: {user_id: parseInt(user_id), post_ids: post_ids},
        type: sequelize.QueryTypes.SELECT
    });

    const postsList = await Promise.all(posts.map(async (post) => {
        const owner = await User.findByPk(post.user_id);
        return {
            id: post.id,
            description: post.description,
            owner: {
                id: owner.id,
                username: owner.username,
                full_name: owner.full_name,
                followed: !!post.followed
            },
            created_at: post.createdAt,
            image: post.image,
            liked: !!post.liked
        };
    }));
 
    res.json(postsList);
}

exports.mergePosts = async (req, res, next) => {
    const list_of_posts = req.body.list_of_posts;

    let mergedPosts = [];

    for (let posts of list_of_posts) {
        mergedPosts.push(...posts);
    }

    // Implement a custom sorting logic
    mergedPosts = customSort(mergedPosts);

    return uniquePosts;
}


function customSort(posts) {
    // Implement custom sorting logic here
    // This logic should sort the posts based on created_at in descending order
    // For posts with the same created_at, sort them by id in descending order
    
    /* Whatever algorithm is used, time complexity increases. */
    return posts; // Placeholder, actual implementation required
}