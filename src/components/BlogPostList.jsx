import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../public/backend.js";

const BlogPostList = () => {
  return (
    <div className="flex flex-wrap -m-4 overflow-y-auto">
      {posts.map((post) => (
        <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <Link to={`/blog/${post.id}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
                <div className="mt-4 flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-600 text-sm">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
