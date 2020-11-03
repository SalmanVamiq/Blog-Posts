import React from "react";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import { Route, Switch } from "react-router-dom";
import Posts from "../../Containers/Posts/Posts";
import NewPost from "../../Containers/NewPost/NewPost";
import styled from "styled-components";
const StyledMain = styled.main`
  margin-top: 60px;
`;
const layout = (props) => {
  return (
    <>
      <Toolbar />
      <StyledMain>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/newpost" exact component={NewPost} />
        </Switch>
      </StyledMain>
    </>
  );
};
export default layout;
