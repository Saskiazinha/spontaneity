import React from "react";
import { useHistory } from "react-router-dom";

export default function Post({ post }) {
  const history = useHistory();
  return (
    <div>
      <p>{post.creator}</p>
      <p>
        {post.startPoint} - {post.endPoint}
      </p>
      <p>{post.location}</p>
      <p>{post.statusLocation}</p>
      <button onClick={() => history.push("/posts/" + post.id)}>Details</button>
    </div>
  );
}
