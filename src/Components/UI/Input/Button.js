import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    &.Success {
        color: #5c9210;
    }
    &.Danger {
        color: #944317;
    }
}
`;
const button = (props) => {
  return (
    <StyledButton onClick={props.clicked} className={props.classname}>
      {props.children}
    </StyledButton>
  );
};
export default button;
