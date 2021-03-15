class Post {
  constructor(postJSON) {
    this.id = postJSON.id;
    this.body = postJSON.body;
    this.created_at = postJSON.created_at;
  }
}