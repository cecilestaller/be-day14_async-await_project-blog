const { BlogService } = require("../service");

// quasi Request-Handler für POST-Endpoint
// --> req.body -- greift auf body zu
// --> newBlog -- template für neues Blog-Object

async function postAddBlogCtrl(req, res){
    try {
        const newBlogTitle = req.body.title;
        const newBlogContent = req.body.content;
        const newBlogTopic = req.body.topic;
    
        const newBlog= {
            id: Date.now(),
            title: newBlogTitle,
            content: newBlogContent,
            topic: newBlogTopic
        }
    
        // --> conditional, wenn Bild hinzugefügt, dann hänge es dem newBlog Object an:
        if(req.file){
            newBlog.imgUrl = req.file.filename;
        }
    
        const newBlogsJson = await BlogService.addBlog(newBlog);  // ! --> Logik steck in service und addBlog-Function die hier nur aufgerufen wird
        res.status(201).json({ success: true, result: newBlogsJson })
            
    } catch(err) {
        console.log(err);
        res.status(500).json({ success: false, error: "failed to add new Blog" })
    }
        
}

module.exports = {
    postAddBlogCtrl,
}