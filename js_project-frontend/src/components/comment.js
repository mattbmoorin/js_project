class Comment {
  constructor(commentJSON) {
    this.id = commentJSON.id;
    this.body = commentJSON.body;
    this.created_at = commentJSON.created_at;
  }

  // render li for comment object
  renderLi() {
    return `<li>${this.body}</li>`;
  }
}