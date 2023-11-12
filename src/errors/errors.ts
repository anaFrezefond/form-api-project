class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerError';
  }
}
class MissingParamError extends Error {
  constructor(paramName: string) {
    super(`Required parameter '${paramName}' is missing`);
    this.name = 'MissingParamError';
  }
}
class NoResultsFoundError extends Error {
  constructor(message: string = 'No results found') {
    super(message);
    this.name = 'NoResultsFoundError';
  }
}
class QueryResultsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QueryResultsError';
  }
}
class FormNotFoundError extends Error {
  constructor(message: string = 'Form not found') {
    super(message);
    this.name = 'FormNotFoundError';
  }
}
class SaveFormError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SaveFormError';
  }
}

export { InternalServerError, MissingParamError, NoResultsFoundError, QueryResultsError, FormNotFoundError, SaveFormError };
