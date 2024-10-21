import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
      const [blogs, setBlogs] = useState([])
      useEffect(()=>{
            fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
      } ,[])

      return (
            <div className="w-2/3">
                  <h2 className="text-4xl">Blogs {blogs.length}</h2>
                  {
                        blogs.map(blog => <Blog 
                              key={blog.id} 
                              blog={blog} 
                              handleAddToBookMark={ handleAddToBookMark}
                              handleMarkAsRead ={handleMarkAsRead}
                              ></Blog>)
                  }
            </div>
      );
};
Blogs.propTypes = {
      handleAddToBookMark: PropTypes.func,
      handleMarkAsRead: PropTypes.func
  }
  
export default Blogs;