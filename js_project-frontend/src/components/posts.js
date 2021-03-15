class Posts {
  constructor() {
    this.posts = [];
    this.adapter = new PostsAdapter();
    this.initBindEventListeners();
    this.fetchAndLoadPosts();
  }

  // cached DOM elements go here:
  initBindEventListeners() {
    this.postsContainer = document.getElementById('posts-container');
    this.newPostBody = document.getElementById('new-post-body')
    this.postsForm = document.getElementById('new-post-form');
    this.postsForm.addEventListener('submit', this.createPost.bind(this)); // anytime form is submitted bind this to Posts class
  }

  // prevent the default form submit behavior which is to refresh the page
  createPost(e) {
    e.preventDefault();
    const value = this.newPostBody.value;

    this.adapter.createPost(value);
  }

  fetchAndLoadPosts() {
    this.adapter
      .getPosts()
      .then((posts) => {
        posts.forEach((post) => this.posts.push(new Post(post)));
      })
      .then(() => {
        this.render();
      });
  }

  render() {
    this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('');
  }
}