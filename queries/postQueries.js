module.exports = {
    getPosts: `SELECT
    p.id,
    p.description,
    p.image,
    p.user_id,
    p.createdAt,
    IF(l.user_id IS NOT NULL, true, false) AS liked,
    IF(f.follower_id IS NOT NULL, true, false) AS followed
    FROM POSTS p
    LEFT JOIN LIKES l ON p.id = l.post_id AND l.user_id = :user_id
    LEFT JOIN FOLLOWS f ON p.user_id = f.following_id AND f.follower_id = :user_id
    WHERE p.id IN (:post_ids)
    ORDER BY p.id`
}