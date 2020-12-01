import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import PostContext from "../contexts/PostContext";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Footer from "../commons/navigation/Footer";
import UserContext from "../contexts/UserContext";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiPlainCircle } from "react-icons/gi";
import PostContent from "../commons/PostContent";
import Header from "../commons/Header";

export default function DetailsPage() {
  const { posts, myPosts, deletePost } = useContext(PostContext);
  const [post, setPost] = useState("");
  const [renderName, setRenderName] = useState(false);
  const { userData } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (posts.find((post) => post.id === id)) {
      setRenderName(true);
      return setPost(posts.find((post) => post.id === id));
    }
    if (myPosts.find((myPost) => myPost.id === id)) {
      setRenderName(false);
      return setPost(myPosts.find((myPost) => myPost.id === id));
    }
  }, [posts, myPosts, id]);
  console.log(post);

  return (
    <>
      <SpontaneityHeader />

      <Header title="Details" />
      <DetailsStyling>
        <TitleStyling>{post.title}</TitleStyling>
        <NameStyling>{renderName && <p>{post.creator}</p>}</NameStyling>
        <Content>
          <PostContent post={post} />
        </Content>
        <NotesStyling>
          <h4>Notes</h4>
          <p>{post.notes}</p>
        </NotesStyling>
        <ColorCode>
          <p>
            <GiPlainCircle color="#2FAB63" /> totally flexible
          </p>
          <p>
            <GiPlainCircle color="#EFD102" /> a little flexible
          </p>
          <p>
            <GiPlainCircle color="#0074B6" /> not flexible
          </p>
        </ColorCode>
        <StampStyling>Last updated: {post.timestamp}</StampStyling>
      </DetailsStyling>
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

const DetailsStyling = styled.div`
  display: grid;
  grid-template-rows: 40px min-content min-content 1fr 40px min-content;
  gap: var(--size-m);
  background-color: var(--turquoise-bright);
  box-shadow: 3px 3px 3px #95b0b4;
  border-radius: 20px;
  padding: var(--size-m) var(--size-m);
  margin: 0 var(--size-xl) var(--size-l) var(--size-xl);
`;

const TitleStyling = styled.h3`
  text-align: center;
  align-self: center;
  color: var(--turquoise-main);
  margin: 0;
`;

const NameStyling = styled.h4`
  text-align: center;
  align-self: center;
  font-size: 1.1em;
  letter-spacing: 0.1em;
  color: var(--turquoise-main);
  margin: -12px 0 var(--size-xs) 0;
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  padding: var(--size-s) 0;
`;

const NotesStyling = styled.div`
  padding: var(--size-s) var(--size-l);
  margin: 0 var(--size-s);
  border: var(--turquoise-main) dashed 1px;
  border-radius: 20px;

  h4 {
    margin: var(--size-m) 0;
    font-size: 0.9em;
  }
  p {
    margin: var(--size-xs) 0;
    font-size: 0.85em;
    letter-spacing: 1px;
    line-height: 1.5;
  }
`;

const StampStyling = styled.div`
  text-align: center;
  font-size: 0.7em;
  margin: 0px;
`;

const ColorCode = styled.div`
  display: inline-flex;
  font-size: 0.7em;
  justify-content: space-evenly;
  align-items: center;
  p {
    margin: 0px;
  }
`;
