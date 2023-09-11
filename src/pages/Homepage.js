import React, { useEffect, useState } from 'react';

import { fetchPost } from '../functions/posts.js';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    fetchPost(setPosts);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={`post${post.id}`}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <Link to={`/post/${post.id}`}>Läs mer...</Link>
        </div>
      ))}
    </div>
  );
}
