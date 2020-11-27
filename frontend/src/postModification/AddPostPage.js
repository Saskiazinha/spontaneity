import React from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import Header from "../commons/Header";
import PostForm from "../postModification/PostForm";

export default function AddPostPage() {
  return (
    <>
      <SpontaneityHeader />
      <Header title={"Add Post"} />
      <PostForm />
    </>
  );
}
