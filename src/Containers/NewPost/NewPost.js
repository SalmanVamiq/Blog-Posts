import React, { Component } from "react";
import Input from "../../Components/UI/Input/Input";
import styled from "styled-components";
import Button from "../../Components/UI/Input/Button";
import { addPost } from "../../js/actions/index";
import { connect } from "react-redux";
import { formConfig } from "../../Form/formConfig";
import formValidator from "../../Form/formValidator";
function mapDispatchToProps(dispatch) {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
}
const StyledForm = styled.form`
  width: 70%;
  margin: auto;
  margin-top: 60px;
`;
class ConnectedNewPost extends Component {
  state = {
    form: formConfig,
    currInput: React.createRef(),
  };
  publishHandler = (e) => {
    e.preventDefault();
    const [hasError, newForm] = formValidator(this.state.form);
    if (hasError) {
      this.setState({ form: newForm });
      return;
    }
    const newpost = this.state.form.reduce((newpostaccumulator, el) => {
      const obj = {};
      obj[el.name] = el.value;
      return Object.assign(newpostaccumulator, obj);
    }, {});
    console.log(newpost);
    this.props.addPost(newpost);
    this.props.history.push("/");
  };
  cancelHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/");
  };
  inputChangeHandler = (e) => {
    const form = [...this.state.form];
    const newForm = form.map((el) => {
      if (el.name === e.target.name) {
        const newEL = {};
        Object.assign(newEL, el, {
          value: e.target.value,
          error: false,
          errortext: "",
        });
        return newEL;
      } else {
        return el;
      }
    });
    this.setState({ form: newForm });
  };
  componentDidMount() {
    // this.currInput.focus();
  }
  render() {
    let formElements = this.state.form.map((el) => (
      <Input {...el} key={el.name} onChange={this.inputChangeHandler} />
    ));
    return (
      <StyledForm>
        <div>{formElements}</div>
        <Button classname="Danger" clicked={this.cancelHandler}>
          Cancel
        </Button>
        <Button classname="Success" clicked={this.publishHandler}>
          Publish
        </Button>
      </StyledForm>
    );
  }
}
const NewPost = connect(null, mapDispatchToProps)(ConnectedNewPost);

export default NewPost;
