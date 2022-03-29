export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http
    this.tokenStorage = tokenStorage
  }

  async signup(username, password, name, email) {
    console.log(this.http)
    const data = await this.http.fetch("/users/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
      }),
    })
    // this.tokenStorage.saveToken(data.token)
    console.log("data: " + data.token)
    return data
  }

  async login(username, password) {
    const data = await this.http.fetch("/users/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    })
    this.tokenStorage.saveToken(data.token)
    return data.username
  }

  async me() {
    const token = this.tokenStorage.getToken()
    const data = await this.http.fetch("/users/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.username
  }

  async logout() {
    this.tokenStorage.clearToken()
  }
}
