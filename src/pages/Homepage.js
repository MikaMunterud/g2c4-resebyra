import React, { useEffect, useState } from "react";
import { WORDPRESS_URL } from "../config.js";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function fetchPosts() {
      const response = await fetch(`${WORDPRESS_URL}wp/v2/posts`);

      const data = await response.json();
      setPosts(data);
      console.log(data);
    }

    console.log(posts);

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={`post${post.id}`}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
}
