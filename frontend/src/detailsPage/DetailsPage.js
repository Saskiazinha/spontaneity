import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../contexts/PostContext";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import FooterDetails from "../commons/FooterDetails";
import UserContext from "../contexts/UserContext";
import { IconButtonStyled } from "../styling/IconButtonStyled";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DetailsPage() {
  const { posts, myPosts } = useContext(PostContext);
  const [post, setPost] = useState("");
  const { userData } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    if (posts.find((post) => post.id === id)) {
      return setPost(posts.find((post) => post.id === id));
    }
    if (myPosts.find((myPost) => myPost.id === id)) {
      return setPost(myPosts.find((myPost) => myPost.id === id));
    }
  });

  return (
    <>
      <SpontaneityHeader />

      <h2>Details</h2>
      <div>
        <p>{post.creator}</p>
        <p>
          Icon {post.startPoint} - {post.endPoint}
        </p>
        <p>Icon {post.location}</p>
        <p>Icon {post.category}</p>
        <p>Notes: {post.notes}</p>
        <p>{post.timestamp}</p>
      </div>
      <FooterDetails actions={getButtons()} />
    </>
  );

  function getButtons() {
    if (userData?.sub === post.creator) {
      return [
        <IconButtonStyled key="update">
          <FaRegEdit />
        </IconButtonStyled>,
        <IconButtonStyled key="delete">
          <RiDeleteBin6Line />
        </IconButtonStyled>,
      ];
    }
  }
}
