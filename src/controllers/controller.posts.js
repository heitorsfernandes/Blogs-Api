const servicesPosts = require('../services/services.posts');

const getAllPosts = async (req, res) => {
    const allPosts = await servicesPosts.getAllPosts();
    return res.status(200).json(allPosts);
};

module.exports = {
    getAllPosts,
};