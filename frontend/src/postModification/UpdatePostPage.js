import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Header from "../commons/Header";
import PostForm from "../postModification/PostForm";
import PostContext from "../contexts/PostContext";
import Footer from "../commons/navigation/Footer";

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
      <Footer />
    </>
  );

  function handleSave(post, locationData) {
    const {
      id,
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
    editPost(
      id,
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
