import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Header from "../commons/Header";
import PostForm from "../postModification/PostForm";
import PostContext from "../contexts/PostContext";
import Footer from "../commons/navigation/Footer";

export default function AddPostPage() {
  const { createPost } = useContext(PostContext);
  const history = useHistory();
  return (
    <>
      <SpontaneityHeader />
      <Header title={"Add Post"} />
      <PostForm onSave={handleSave} />
      <Footer />
    </>
  );

  function handleSave(post, locationData) {
    const {
      title,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      district,
      statusLocation,
      category,
      statusCategory,
      notes,
    } = post;
    const { lat, lng, address } = locationData;
    createPost(
      title,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      address,
      district,
      lat,
      lng,
      statusLocation,
      category,
      statusCategory,
      notes
    );
    history.goBack();
  }
}
