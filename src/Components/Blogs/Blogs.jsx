import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {
      const [blogs, setBlogs] = useState([])
      useEffect(()=>{
            fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
      } ,[])

      return (
            <div className="w-2/3">
                  <h2 className="text-4xl">Blogs {blogs.length}</h2>
            </div>
      );
};

export default Blogs;