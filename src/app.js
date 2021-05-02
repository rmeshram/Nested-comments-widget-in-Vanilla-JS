import initialState from "./initial-state.js";
import createStore from "./store.js";
import Header from "./components/Header.js";
import Comments from "./components/Comments.js";
import reducer from "./reducer.js";

const store = createStore(reducer, initialState);

class App {
  constructor(root) {
    store.subscribe((state) => {
      console.log(state, root);
      this.renderApp(state, root);
      this.attachEvents(state, root);
    });
    store.dispatch({ type: "INIT" });
  }
  renderApp(state, root) {
    if (!root) return "";
    root.innerHTML = "";
    root.appendChild(Header(state))
    root.appendChild(Comments(state));
  }
  attachEvents(state, root) {
    root && root.addEventListener("click", handleEvents);
  }
}


function handleEvents(event) {
  const id = event.target.dataset.id;
  const { className } = event.target;
  let parentId = "";
  let input ="";
  switch (className) {
    case "reply":
      store.dispatch({ type: "REPLY_ENABLED", data: id });
      store.dispatch({ type: "REPLY", data: { id , input: ""} });
      break;
    case "delete":
       parentId = event.target.dataset.parentId || null;
      store.dispatch({ type: "DELETE", data: {id, parentId} });
      break;
    case "cancel-button":
       parentId = event.target.dataset.parentId || null;
      store.dispatch({ type: "DELETE", data: {id, parentId} });
      break;
    case "reply-button":
      input = document.querySelector(".reply-input").value;
      store.dispatch({ type: "EDIT", data: { input, id } });
      break;
    case "submit":
      input = document.querySelector(".search-bar-input").value;
      store.dispatch({
        type: "COMMENT",
        data: {
          likes: 0,
          id: Math.floor(Math.random() * 1000),
          text: input,
          childrens: [],
        },
      });
      break;
  }
}


const container = document.getElementById("container");

const CommentsWidget = new App(container);
