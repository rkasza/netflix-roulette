export default class HttpError extends Error {

  constructor({ statusCode, statusText }, messages) {
      super(statusText);
      this.status = statusCode;
      this.messages = messages;
  }

}