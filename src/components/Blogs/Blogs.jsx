import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-8/12">
            {/* <h1 className="text-4xl font-semibold">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog =>
                    <Blog key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;