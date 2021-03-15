class PostsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/posts';
  }

  getPosts() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

  createPost(value) {
    // create new object where body is equal to passed in value
    const post = {
      body: value
    }
    return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          post
        })
      })
      .then(res => res.json()) // send parsed json obj back to posts component
  }
}