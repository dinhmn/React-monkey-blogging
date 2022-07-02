import React from "react";
import styled from "styled-components";
import PostItem from "../post/PostItem";
const HomeItemsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

const HomeItems = () => {
  return (
    <div className="container">
      <HomeItemsStyles>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </HomeItemsStyles>
    </div>
  );
};

export default HomeItems;
