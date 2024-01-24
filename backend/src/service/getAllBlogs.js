const { loadAllBlogs } = require("../data-access")

async function getAllBlogs(querys) {
    const blogs = await loadAllBlogs();
    const blogsResult = blogs
                .filter((blog) => {
                    if(typeof querys.topic === "undefined"){
                        return true;
                    }
                    return blog.topic === querys.topic;
                })
                .filter((blog) => {
                    if(typeof querys.titleSearch === "undefined"){
                        return true;
                    }
                    return blog.title.toLowerCase().includes(querys.titleSearch.toLowerCase());
                })
    return blogsResult; 
}

// geht hier auch: ohne async-await schreibweise, weil wir mit dem blog-wert nichts machen, sondern nur die promise weitergeben
// function getAllBlogs() {
//     return loadAllBlogs()
        
// }

module.exports = {
    getAllBlogs,
}