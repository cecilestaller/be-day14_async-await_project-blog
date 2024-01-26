import { Link, useParams } from "react-router-dom";
import './BlogDetails.scss'
import { backendUrl } from "../api/api";

const BlogDetail = ({ blogs, setBlogs }) => {

    const dynamicPath = useParams();
    const detailsPath = dynamicPath.blogId;

    const filteredBlog = blogs.filter((singleBlogObj) => {
        return singleBlogObj.id.toString() === detailsPath.toString();
    })

    // console.log(filteredBlog);
    
    return (  
        <article className="detailPage_wrap">
            <button>
                <Link to='/'>zurück</Link>
            </button>
            {filteredBlog.map((blog, index) => {
                return (
                    <div key={index}>
                        <img src={backendUrl + "/" + blog.imgUrl} alt={blog.title} />
                        <h2>{blog.title}</h2>
                        <h4>Topic: {blog.topic}</h4>
                        <p>{blog.content}</p>
                    </div>
                )
            })}
        </article>
    );
}
 
export default BlogDetail;