import React, { useEffect, useState } from "react";

import { fetchPost } from "../functions/posts.js";

import Post from "../components/Post.js";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    fetchPost(setPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={`post${post.id}`}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}
