import React from "react";
import NavigationLink from "./NavigationLink/NavigationLink";
import styled from "styled-components";
const StyledDiv = styled.div`
  height: 56px;
  display: flex;
  justify-content: flex-end;
  background-color: #007cba;
  position: fixed;
  width: 100%;
  top: 0;
`;

const toolbar = (props) => {
  return (
    <StyledDiv>
      <NavigationLink link="/">Posts</NavigationLink>
      <NavigationLink link="/newpost">New Post</NavigationLink>
    </StyledDiv>
  );
};
export default toolbar;
