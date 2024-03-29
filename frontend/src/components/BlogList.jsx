import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import './BlogList.scss'
import { backendUrl } from "../api/api";

const BlogList = ({ currentBlogs, updateBlogs }) => {

    return (  
        <section className="blogList_wrap">
            {currentBlogs.map((singleBlogObj, index) => {
                return (
                    <div 
                    className="singleCard_wrap"
                    key={index}>
                        <Link to={`/blogs/${singleBlogObj.id}`}>
                            <div>
                                <img src={backendUrl + "/" + singleBlogObj.imgUrl} alt={singleBlogObj.title} />
                            </div>
                            <h3>{singleBlogObj.title}</h3>
                        </Link>

                    </div>
                )
            })}
        </section>
    );
}
 
export default BlogList;