class Posts {
  constructor() {
    this.posts = [];
    this.adapter = new PostsAdapter();
    // this.bindEventListeners();
    this.fetchAndLoadPosts();
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
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = this.posts.map(post => `<li>${post.body}</li>`).join('');
  }
}