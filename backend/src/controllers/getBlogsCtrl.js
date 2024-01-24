const { BlogService } = require("../service");

// quasi request-Handler des GET-Endpoints (Logik ist in BlogService.getAllBlogs ausgelagert)
// --> sendet die RESPONSE raus!!

async function getBlogsCtrl(req, res) {
    try {
        const topic = req.query.topic;
        const titleSearch = req.query.titleSearch;
    
        const existingBlogs = await BlogService.getAllBlogs({ topic, titleSearch });
            
        res.status(200).json({ success: true, result: existingBlogs });

    } catch(err) {
        
        console.log(err);
        res.status(500).json({ success: false, error: "failed to load blogs" })
    }
}

module.exports = {
    getBlogsCtrl,
}