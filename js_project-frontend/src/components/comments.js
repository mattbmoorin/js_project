class Comments {
  constructor() {
    this.comments = [];
    this.adapter = new CommentsAdapter();
    this.initBindEventListeners();
    this.fetchAndLoadcomments();
  }

  // cached DOM elements go here:
  initBindEventListeners() {
    this.commentsContainer = document.getElementById('comments-container');
    this.newCommentBody = document.getElementById('new-comment-body')
    this.commentsForm = document.getElementById('new-comment-form');
    this.commentsForm.addEventListener('submit', this.createComment.bind(this)); // anytime form is submitted bind this to Comments class
  }

  // prevent the default form submit behavior which is to refresh the page
  createComment(e) {
    e.preventDefault();
    const value = this.newCommentBody.value;

    this.adapter.createComment(value).then(comment => {
      this.comments.push(new Comment(comment)); // passed back from the server and pushed into dom via new instance of comment
      this.newCommentBody.value = '';
      this.render();
    });
  }

  fetchAndLoadcomments() {
    this.adapter
      .getComments()
      .then((comments) => {
        comments.forEach((comment) => this.comments.push(new Comment(comment)));
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.commentsContainer.innerHTML = this.comments.map(comment => comment.renderLi()).join('');
  }
}