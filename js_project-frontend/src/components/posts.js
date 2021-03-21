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
    this.postsContainer.addEventListener("click", (e) => {
      function showForm() {
        document.getElementById('new-comment-form').style.display = 'block';
      }
      showForm()
      console.log(e.target.parentNode.id)
    });
    this.newPostBody = document.getElementById('new-post-body');
    this.postsForm = document.getElementById('new-post-form');
    this.postsForm.addEventListener('submit', this.createPost.bind(this)); // anytime form is submitted bind this to Posts class
  }

  // prevent the default form submit behavior which is to refresh the page
  createPost(e) {
    e.preventDefault();
    const value = this.newPostBody.value;

    this.adapter.createPost(value).then(post => {
      this.posts.push(new Post(post)); // passed back from the server and pushed into dom via new instance of post
      this.newPostBody.value = '';
      this.render();
    });
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

  showComment() {
    console.log('works')
  }

  render() {
    this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('');
  }
}

// this.forEach((post) => post.addEventListener('click', this.addComment));