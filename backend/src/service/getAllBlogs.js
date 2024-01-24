const { loadAllBlogs } = require("../data-access")

async function getAllBlogs() {
    const blogs = await loadAllBlogs();
    return blogs; 
}

// geht hier auch: ohne async-await schreibweise, weil wir mit dem blog-wert nichts machen, sondern nur die promise weitergeben
// function getAllBlogs() {
//     return loadAllBlogs()
        
// }

module.exports = {
    getAllBlogs,
}