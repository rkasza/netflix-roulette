export default class HttpError extends Error {

  constructor({ status, statusText }, messages) {
      super(statusText);
      this.status = status;
      this.messages = messages;
  }

}