import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchPost } from "../functions/posts.js";

export default function Singlepost() {
  const [post, setPost] = useState({});
  const { index } = useParams();

  useEffect(() => {
    fetchPost(setPost, Number(index) || 0);
  }, []);

  return (
    <div>
      <h1>{post.title?.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
    </div>
  );
}
