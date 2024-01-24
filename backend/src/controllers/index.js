const { getBlogsCtrl } = require("./getBlogsCtrl");
const { postAddBlogCtrl } = require("./postAddBlogCtrl");

const BlogController = {
    getBlogs: getBlogsCtrl,
    postBlog: postAddBlogCtrl,
}

module.exports = {
    BlogController,
}