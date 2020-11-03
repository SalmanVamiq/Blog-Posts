import React from "react";
import styled from "styled-components";
const StyledSpan = styled.span`
  font-size: 12px;
  color: red;
`;
const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 2px;
`;
const StyledInput = styled.input`
  width: 100%;
  &:focus {
    border: 1px black solid;
    background-color: whitesmoke;
  }
  &.inerror {
    border: 1px red solid;
  }
`;
const StyledTextArea = styled.textarea`
  width: 100%;

  &:focus {
    border: 1px black solid;
    background-color: whitesmoke;
  }
  &.inerror {
    border: 1px red solid;
  }
`;
const input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <StyledInput
          {...props}
          className={props.error ? "inerror" : null}
          key={props.name}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <StyledTextArea
          {...props}
          className={props.error ? "inerror" : null}
          key={props.key}
        >
          {props.value}
        </StyledTextArea>
      );
      break;
    default:
      inputElement = (
        <StyledInput
          {...props}
          className={props.error ? "inerror" : null}
          key={props.key}
        />
      );
      break;
  }

  return (
    <>
      {props.label ? <StyledLabel>{props.label}</StyledLabel> : null}
      {inputElement}
      {props.error ? <StyledSpan>{props.errortext}</StyledSpan> : null}
    </>
  );
};
export default input;
