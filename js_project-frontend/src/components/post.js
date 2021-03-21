class Post {
  constructor(postJSON) {
    this.id = postJSON.id;
    this.body = postJSON.body;
    this.created_at = postJSON.created_at;
  }

  // render li for post object
  renderLi() {
    return `<div class = 'post-get-comment' id = "${this.id}"><div>${this.body}</div></div>`;
  }
}