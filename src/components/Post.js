import React from "react";

import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Post({ post }) {
  const title = post?.title?.rendered ?? "";
  const content = post?.content?.rendered ?? "";

  const isCurrentPost = post.id === Number(useParams().index);

  if (!title) return null;

  return (
    <>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {isCurrentPost === false ? (
        <Link to={`/post/${post.id}`}>Läs mer...</Link>
      ) : null}
    </>
  );
}
