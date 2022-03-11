export default class PostService {
  constructor(http, tokenStorage) {
    this.http = http
    this.tokenStorage = tokenStorage
  }

  async getCategory(username) {
    const query = username ? `?username=${username}` : ""
    return this.HttpClient.fetch(`/cotato/${query}`, {
      method: "GET",
      headers: this.getHeaders(),
    })
  }

  async createPost(postTitle, postDesc, category) {
    console.log(this.getHeaders())
    return this.http.fetch(`/cotato/${category}/createPost`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({
        title: postTitle,
        desc: postDesc,
        category: category,
      }),
    })
  }

  async deletePost(id) {
    return this.http
      .fetch(`/cotato/deletePost/${id}`, {
        method: "DELETE",
        headers: this.getHeaders(),
      })
      .then((response) => console.log(response))
  }

  async updatePost(postId, postTitle, postDesc) {
    return this.http.fetch(`/cotato/updatePost/${postId}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify({
        title: postTitle,
        desc: postDesc,
      }),
    })
  }

  getHeaders() {
    const token = this.tokenStorage.getToken()
    return {
      Authorization: `Bearer ${token}`,
    }
  }
}
