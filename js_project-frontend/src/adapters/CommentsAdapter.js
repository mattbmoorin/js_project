class CommentsAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/comments';
  }

  getComments() {
    return fetch(this.baseUrl).then((res) => res.json());
  }

  createComment(value) {
    // create new object where body is equal to passed in value
    const comment = {
      body: value
    }
    return fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          comment
        })
      })
      .then(res => res.json()) // send parsed json obj back to comments component
  }
}