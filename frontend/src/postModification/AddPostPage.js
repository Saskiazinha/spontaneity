import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Header from "../commons/Header";
import PostForm from "../postModification/PostForm";
import PostContext from "../contexts/PostContext";

export default function AddPostPage() {
  const { createPost } = useContext(PostContext);
  const history = useHistory();
  return (
    <>
      <SpontaneityHeader />
      <Header title={"Add Post"} />
      <PostForm onSave={handleSave} />
    </>
  );

  function handleSave(post) {
    const {
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
    createPost(
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
