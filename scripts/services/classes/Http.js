class Http {
  constructor() {
    this.apiUrl = 'http://localhost:3000';
  }

  async get(url) {
    const response = await fetch(`${this.apiUrl}${url}`).then(response => response.json());
    return response;
  }

}

export default Http;
