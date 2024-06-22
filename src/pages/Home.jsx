import React from "react";
import BlogPostList from "../components/BlogPostList";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
      <BlogPostList />
    </div>
  );
};

export default Home;
