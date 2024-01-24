const { loadAllBlogs, saveAllBlogs } = require("../data-access");

async function addBlog(newBlog) {
    const existingBlogs = await loadAllBlogs();
    const newBlogsArr = [...existingBlogs, newBlog];
    await saveAllBlogs(newBlogsArr);
    return newBlogsArr;
}

module.exports = {
    addBlog
}