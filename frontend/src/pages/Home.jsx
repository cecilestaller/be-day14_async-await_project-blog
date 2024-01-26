import { Link } from "react-router-dom";
import BlogList from "../components/BlogList";
import './Home.scss'
import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";


const Home = ({ blogs, setBlogs }) => {

    const [search, setSearch] = useState("");


    useEffect(() => {
        fetchAllBlogs();
    }, [])

    const fetchAllBlogs = async () => {
        try {
            const response = await fetch(backendUrl + "/api/blogs");
            const { success, result, error } = await response.json();
            if(!success) throw error;
            return setBlogs(result);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBlogsBySearchTerm = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/blogs?titleSearch=${search}`);
            const { success, result, error } = await response.json();
            if(!success) throw error;
            return setBlogs(result);
        } catch (error){
            console.log(error);
        }
    }

    const searchBlog = (event) => {
        event.preventDefault();
        console.log(search);
        fetchBlogsBySearchTerm();
    }

    return (  
        <main>
            <section className="header">
            <button>
                <Link to='/admin'>Add Blogs</Link>
            </button>
                
            </section>
            <div className="home_desc">
            <h2>It's never too late to learn...</h2>
                <p>Find the perfect blog here to learn what you've always wanted to learn</p>
            </div>
            <form onSubmit={searchBlog}>
                <input type="text" name="" id="" placeholder="search blog..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">SEARCH</button>
            </form>
            <BlogList currentBlogs={blogs} updateBlogs={setBlogs} />
        </main>
    );
}
 
export default Home;