export default class APIError extends Error {
  constructor(response, body) {
    super(); // Error.constructor()

    this.name = 'APIError';
    this.response = response;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
