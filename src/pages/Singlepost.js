import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WORDPRESS_URL } from "../config.js";

async function fetchPost(index, stateSetter) {
  const response = await fetch(WORDPRESS_URL + "wp/v2/posts");
  const data = await response.json();
  const post = data[index] ?? {};
  stateSetter(post);
}

export default function Singlepost() {
  const [post, setPost] = useState({});
  const { index } = useParams();

  useEffect(() => {
    fetchPost(index, setPost);
  }, []);

  return (
    <div>
      <h1>{post.title?.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
    </div>
  );
}
