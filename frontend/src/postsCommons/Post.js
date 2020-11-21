import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <p>{post.creator}</p>
      <p>
        {post.startPoint} - {post.endPoint}
      </p>
      <p>{post.localDate}</p>
      <p>{post.location}</p>
      <p>{post.statusLocation}</p>
      <button>Details</button>
    </div>
  );
}
