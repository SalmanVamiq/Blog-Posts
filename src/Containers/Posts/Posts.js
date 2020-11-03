import React, { Component } from "react";
import Post from "../Posts/Post/Post";
import styled from "styled-components";
import { connect } from "react-redux";
import Searchbar from "./SearchPosts/Searchbar";
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
const StyledDiv = styled.div`
  display: block;
  width: 70%;
  margin: auto;
`;
class Posts extends Component {
  state = {
    searchString: "",
  };
  searchHandler = (e) => {
    this.setState({ searchString: e.target.value.trim() });
  };
  clearSearchHandler = (e) => {
    this.setState({ searchString: "" });
  };
  render() {
    let Posts = [...this.props.posts.reverse()];
    if (this.state.searchString !== "") {
      Posts = this.props.posts.filter((post) => {
        console.log(post.title);
        if (
          post.title
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase()) ||
          post.author
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase()) ||
          post.body
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    const postsJSX = Posts.map((post) => <Post {...post} />);

    return (
      <StyledDiv>
        <Searchbar
          onSearchHandler={this.searchHandler}
          onClearSearchHandler={this.clearSearchHandler}
          searchString={this.state.searchString}
        />
        {postsJSX}
      </StyledDiv>
    );
  }
}
const PostsList = connect(mapStateToProps)(Posts);
export default PostsList;
