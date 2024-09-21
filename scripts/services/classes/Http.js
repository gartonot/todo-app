class Http {
  constructor() {
    this.apiUrl = 'http://localhost:3000';
  }

  async get(url) {
    const response = await fetch(`${this.apiUrl}${url}`).then(response => response.json());
    return response;
  }

  async post(url, params) {
    await fetch(`${this.apiUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(params),
    }).then(response => response.json());
  }

}

export default Http;
