import { ADD_POST } from "../constants/action-types";
const initialState = {
  posts: [
    {
      key: 1,
      title: "Post 1",
      author: "Salman Vamiq",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet nisl sit amet sapien blandit, et aliquam neque porta. Nunc a blandit odio. Etiam sem sem, consequat et lorem vel, posuere convallis metus. Fusce maximus dolor quis sapien euismod, nec posuere metus ultrices. Vestibulum nisl augue, venenatis sit amet purus ac, semper vulputate risus. Mauris eleifend, sapien at molestie tristique, lacus risus placerat libero, non ultricies sapien tortor eget metus. Maecenas quis magna eu tellus suscipit porttitor nec congue ante. ",
    },
    {
      key: 2,
      title: "Post 2",
      author: "Anshul Gangil",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet nisl sit amet sapien blandit, et aliquam neque porta. Nunc a blandit odio. Etiam sem sem, consequat et lorem vel, posuere convallis metus. Fusce maximus dolor quis sapien euismod, nec posuere metus ultrices. Vestibulum nisl augue, venenatis sit amet purus ac, semper vulputate risus. Mauris eleifend, sapien at molestie tristique, lacus risus placerat libero, non ultricies sapien tortor eget metus. Maecenas quis magna eu tellus suscipit porttitor nec congue ante. ",
    },
  ],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat({
        key: state.posts.length + 1,
        ...action.payload,
      }),
    });
  }
  return state;
}

export default rootReducer;
