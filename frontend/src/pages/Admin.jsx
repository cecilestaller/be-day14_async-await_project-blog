import { useState } from "react";
import { Link } from "react-router-dom";
import './Admin.scss'

const Admin = ({ blogs, setBlogs }) => {
    const [blogTitle, setBlogTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [attachment, setAttachment] = useState();
    const [blogTopic, setBlogTopic] = useState("");

    // FETCH --> POST New Blog Endpoint
    const addBlog = async () => {
        try {
            const url = "http://localhost:3030/api/blogs";
    
            // ! MIT FILE muss body aus req formData sein !!
            const formData = new FormData();
            formData.append("title", blogTitle);
            formData.append("content", blogContent);
            formData.append("topic", blogTopic)
            if(attachment){
                formData.append("imgUrl", attachment, attachment.name);
            }
    
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });
            const { success, result, error } = await response.json();
                
            if(!success) throw err;
            setBlogs(result)
                
        } catch (error) {
            console.log(error);
        }
        
        setBlogTitle("");
        setBlogContent("");
        setBlogTopic("");
    }

    // console.log("Admin Log: ", blogs);

    return (  
        <>
            <section className="admin_wrap">
                <button>
                    <Link to='/'>HOME</Link>
                </button>
                <form>
                    
                    <h2>NEW POST</h2>

                    <input type="text" name="" id="" 
                    placeholder="Blogtitle..."
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    />

                    <input type="text" name="" id=""
                    placeholder="blog topic (1 keyword)"
                    value={blogTopic}
                    onChange={(e) => setBlogTopic(e.target.value)}
                    />

                    <input type="file" name="" id="" 
                    placeholder="image"
                    onChange={(e) => setAttachment(e.target.files[0])}
                    />

                    <textarea name="" id="" cols="30" rows="10"
                    placeholder="content"
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    ></textarea>

                    <button
                    className="publish"
                    onClick={addBlog}
                    >PUBLISH</button>
                </form>
            </section>
        </>
    );
}
 
export default Admin;