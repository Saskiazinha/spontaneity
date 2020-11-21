import React from "react";
import Post from "./Post";

export default function PostList({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts?.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </div>
  );
}
