import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import Header from "../commons/Header";
import PostForm from "../postModification/PostForm";
import PostContext from "../contexts/PostContext";

export default function AddPostPage() {
  const { myPosts, editPost } = useContext(PostContext);
  const history = useHistory();
  const { id } = useParams();
  const post = myPosts.find((post) => post.id === id);
  return (
    <>
      <SpontaneityHeader />
      <Header title={"Update Post"} />
      <PostForm onSave={handleSave} post={post} />
    </>
  );

  function handleSave(post) {
    console.log(post);
    const {
      id,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      location,
      statusLocation,
      category,
      statusCategory,
      notes,
    } = post;
    editPost(
      id,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      location,
      statusLocation,
      category,
      statusCategory,
      notes
    );
    history.goBack();
  }
}
