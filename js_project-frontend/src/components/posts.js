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
    this.postsForm = document.getElementById('new-post-form');
    this.postsForm.addEventListener('submit', this.createPost)
  }

  createPost() {
    console.log('working');
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