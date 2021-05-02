import Comment from "./components/Comment.js";
export function updateReply(comments, input, id) {
  for (let comment of comments) {
    if (comment.id == id) {
      comment.childrens.unshift({
        likes: 0,
        childrens: [],
        id: Math.floor(Math.random() * 100),
        text: input,
        parentId: comment.id
      });
    } else if (comment && comment.childrens && comment.childrens.length > 0) {
      comment.childrens = [...updateReply(comment.childrens, input, id)];
    }
  }
  return comments;
}

export function updateEdit(comments, input, id) {
  for (let comment of comments) {
    if (comment.id == id) {
        comment.text = input;
        comment.childrens = [];
        comment.likes = 0;
    } else if (comment && comment.childrens && comment.childrens.length > 0) {
      comment.childrens = [...updateEdit(comment.childrens, input, id)];
    }
  }
  return comments;
}

export function renderTree(collections, margin = 0, paddingTop = 10) {
  let str = "";
  for (let collection of collections) {
    str += Comment(collection, margin);
    if (collection && collection.childrens && collection.childrens.length > 0) {
      str += renderTree(collection.childrens, margin + 80, paddingTop - 3);
    }
  }
  return str;
}



export const deleteComment = (comments, parentId, id) => {
  for (let comment of comments) {
    if( parentId == "null" || parentId == "undefined") {
     comments = comments.filter(comment => comment.id != id);
    } else  if (comment.id == parentId) {
      comment.childrens = comment.childrens.filter(child => child.id != id)
    } else if (comment.childrens.length > 0) {
      comment.childrens =  deleteComment(comment.childrens, parentId, id)
    } 
  }
  return comments
}