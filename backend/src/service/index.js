const { getAllBlogs } = require("./getAllBlogs.js");
const { addBlog } = require("./addBlog.js");

const BlogService = {
    getAllBlogs,
    addBlog
}

module.exports = {
    BlogService
}