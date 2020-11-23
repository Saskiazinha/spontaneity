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
        Time: {post.startPoint} - {post.endPoint}
      </p>
      <p>Preferred Location: {post.location}</p>
      <p>{post.statusLocation}</p>
      <p>Category: {post.category}</p>
      <p>Notes: {post.notes}</p>
      <p>{post.timestamp}</p>
    </div>
  );
}
