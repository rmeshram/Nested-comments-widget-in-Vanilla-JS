export default (props, margin, paddingtop) => {
  const { likes, text, id, parentId } = props || {};
  let elem = null;
  if (text) {
    elem = `  <div class="comment"> <div class="text">
${text}
</div> <span class="likes" data-id=${id}>  Likes ${likes} </span> <span class="delete" data-id=${id} data-parent-id=${parentId}>  Delete  </span>
<span class="reply" data-id=${id}>  Reply  </span> </div>`;
  } else {
    elem = `<input type="text" class="reply-input" placeholder="Reply here"> <button class="reply-button" data-id=${id}> Reply </button> <button class="cancel-button" data-id=${id} data-parent-id=${parentId}> Cancel </button>`;
  }
  return `<div class="comment-card" data-id="${id}" style="margin-left: ${margin}px; margin-top: ${paddingtop}px">
     
        ${elem}
        </div>
      `;
};