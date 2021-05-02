export default (props) => {

  const div = document.createElement("div");
  div.className = "input-container";
  div.innerHTML = `<input type="text" placeholder="Write your comment here" class="search-bar-input" value=${
    props.input
  }> <button class="submit"> Post </button>`;
  return div;
};

