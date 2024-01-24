const multer = require("multer");
const express = require("express");
const { BlogController } = require("../controllers");

const attachmentStorage = multer.diskStorage({
    destination: __dirname + "/../../data/uploads/",
    filename: function (_, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const uploadMiddleware = multer({ storage: attachmentStorage });

const blogRouter = express.Router();


// GET - Endpoint:

blogRouter.get("/", BlogController.getBlogs)

// POST - Endpoint:

blogRouter.post("/", 
uploadMiddleware.single("imgUrl") , BlogController.postBlog)

module.exports = {
    blogRouter,
}