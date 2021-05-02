import { updateReply, updateEdit, deleteComment } from "./utils.js"

export default function reducer(state, action) {
  switch (action.type) {
    case "LIKES":
      return state;
    case "INIT":
      return state;
    case "INPUT":
      return { ...state, isLoading: action.data };
    case "REPLY":
      return {
        ...state,
        comments: updateReply(
          state.comments,
          action.data.input,
          state.currentId
        ),
      };
    case "REPLY_ENABLED":
      return { ...state, isReplyEnabled: true, currentId: action.data };
    case "COMMENT":
      return { ...state, comments: state.comments.concat(action.data) };
    case "DELETE":
      return { ...state, comments: deleteComment(state.comments, action.data.parentId, action.data.id) };
    case "EDIT":
      return {
        ...state,
        comments: updateEdit(state.comments, action.data.input, action.data.id),
      };
  }
}
