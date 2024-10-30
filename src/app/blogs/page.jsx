"use client";

import BlogCard from "../components/BlogCard/BlogCard";
import { useState, useEffect } from "react";
import fetchWrapper from "../lib/fetchWrapper";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const res = await fetchWrapper("blogapp/blog/");
      setBlogs(res.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      {blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-[10%] my-5">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
