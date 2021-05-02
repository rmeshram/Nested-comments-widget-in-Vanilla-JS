import {renderTree} from "./../utils.js";

export default (props) => {
  const { comments = [] } = props || {};
  const div = document.createElement("div");
  div.className = "comments-container";
  div.innerHTML = renderTree(comments);
  return div;
};
