import React from "react";

export default function Post({ post }) {
  const title = post?.title?.rendered ?? "";
  const content = post?.content?.rendered ?? "";

  return (
    <>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
