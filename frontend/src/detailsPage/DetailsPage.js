import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../contexts/PostContext";
import SpontaneityHeader from "../commons/SpontaneityHeader";

export default function DetailsPage() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <SpontaneityHeader />
      <h2>Details</h2>
      <p>{post.creator}</p>
      <p>
        Icon {post.startPoint} - {post.endPoint}
      </p>
      <p>Icon {post.location}</p>
      <p>Icon {post.category}</p>
      <p>Notes: {post.notes}</p>
      <p>{post.timestamp}</p>
    </div>
  );
}
