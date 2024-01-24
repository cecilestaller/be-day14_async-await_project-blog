const { BlogService } = require("../service");

// quasi request-Handler des GET-Endpoints (Logik ist in BlogService.getAllBlogs ausgelagert)
// --> sendet die RESPONSE raus!!

async function getBlogsCtrl(req, res) {
    try {
        const topic = req.query.topic;
        const titleSearch = req.query.titleSearch;
    
        const existingBlogs = await BlogService.getAllBlogs();
            
        const blogsResult = existingBlogs
                    .filter((blog) => {
                        if(typeof topic === "undefined"){
                            return true;
                        }
                        return blog.topic === topic;
                    })
                    .filter((blog) => {
                        if(typeof titleSearch === "undefined"){
                            return true;
                        }
                        return blog.title.toLowerCase().includes(titleSearch.toLowerCase());
                });
        res.status(200).json({ success: true, result: blogsResult })
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: "failed to load blogs" })
    }
}

module.exports = {
    getBlogsCtrl,
}