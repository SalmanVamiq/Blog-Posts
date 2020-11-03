import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  & a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    font-size: 18px;
    padding: 16px 10px;
  }

  & a:hover,
  & a:active,
  & a.active {
    background-color: #62d1de;
    border-bottom: 4px #ffab36 solid;
  }
`;
const navigationlink = (props) => {
  return (
    <StyledDiv>
      <NavLink to={props.link} exact>
        {props.children}
      </NavLink>
    </StyledDiv>
  );
};
export default navigationlink;
