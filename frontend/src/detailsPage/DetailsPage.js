import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../contexts/PostContext";

export default function DetailsPage() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  return (
    <div>
      <div>post.creator</div>
    </div>
  );
}
