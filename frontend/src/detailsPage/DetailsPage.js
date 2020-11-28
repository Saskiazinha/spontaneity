import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostContext from "../contexts/PostContext";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Footer from "../commons/Footer";
import UserContext from "../contexts/UserContext";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import PostContent from "../commons/PostContent";
import Header from "../commons/Header";

export default function DetailsPage() {
  const { posts, myPosts, deletePost } = useContext(PostContext);
  const [post, setPost] = useState("");
  const { userData } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (posts.find((post) => post.id === id)) {
      return setPost(posts.find((post) => post.id === id));
    }
    if (myPosts.find((myPost) => myPost.id === id)) {
      return setPost(myPosts.find((myPost) => myPost.id === id));
    }
  }, [posts, myPosts, id]);

  return (
    <>
      <SpontaneityHeader />

      <Header title="Details" />
      <div>
        <h3>{post.creator}</h3>
        <PostContent post={post} />
        <p>Notes: {post.notes}</p>
        <p>{post.timestamp}</p>
      </div>
      <Footer actions={getDeleteUpdateButtons()} />
    </>
  );

  function getDeleteUpdateButtons() {
    if (userData?.sub === post.creator) {
      return [
        <IconButtonStyled
          key="update"
          onClick={() => history.push("/update" + post.id)}
        >
          <FaRegEdit size={25} />
        </IconButtonStyled>,
        <IconButtonStyled key="delete" onClick={handleDelete}>
          <RiDeleteBin6Line size={25} />
        </IconButtonStyled>,
      ];
    }
  }

  function handleDelete(event) {
    deletePost(post.id);
    history.goBack(2);
  }
}
