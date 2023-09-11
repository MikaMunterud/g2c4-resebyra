import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchPost } from "../functions/posts.js";

import Post from "../components/Post.js";

export default function Singlepost() {
  const [post, setPost] = useState({});
  const { index } = useParams();

  useEffect(() => {
    fetchPost(setPost, Number(index) || 0);
  }, []);

  return (
    <div>
      <Post post={post} />
    </div>
  );
}
