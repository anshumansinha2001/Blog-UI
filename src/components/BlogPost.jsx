import React, { useEffect } from "react";
import SocialShare from "./SocialShare";

const BlogPost = ({ post }) => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-3xl mx-auto">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 object-cover rounded-lg shadow-md mb-6"
      />
      <div className="px-4 lg:px-0">
        <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
        <div className="flex items-center my-4 ">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-gray-700">{post.author.name}</span>
        </div>
        <div className="prose lg:prose-xl text-justify">{post.content}</div>
        <div className="mt-6">
          <SocialShare />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
