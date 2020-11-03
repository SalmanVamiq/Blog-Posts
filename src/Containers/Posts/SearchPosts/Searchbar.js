import React from "react";
import Input from "../../../Components/UI/Input/Input";
import Button from "../../../Components/UI/Input/Button";
const searchPosts = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <Input
          placeholder="search here..."
          inputtype="input"
          onChange={props.onSearchHandler}
          value={props.searchString}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <Button classname="Danger" clicked={props.onClearSearchHandler}>
          Clear
        </Button>
      </div>
    </div>
  );
};
export default searchPosts;
