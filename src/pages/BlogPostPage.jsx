import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { posts } from "../../public/backend.js";

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const selectedPost = posts.find((post) => post.id === parseInt(id));
        if (selectedPost) {
          setPost(selectedPost);
        } else {
          throw new Error(`Post with id ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8 w-full h-screen">
      {post ? <BlogPost post={post} /> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPostPage;
