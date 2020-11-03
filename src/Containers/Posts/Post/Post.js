import React from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  border: 1px grey solid;
  border-radius: 5px;
  background-color: #c0ddf5;
  box-shadow: 5px 5px;
  margin-top: 10px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
`;
const post = (props) => {
  return (
    <StyledDiv>
      <h2>{props.title}</h2>
      <span>{props.author}</span>
      <p>{props.body}</p>
    </StyledDiv>
  );
};
export default post;
