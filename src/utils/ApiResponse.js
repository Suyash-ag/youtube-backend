class ApiError extends Error {
  constructor(statusCode, message = "Success", data) {
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = statusCode < 400
  }
}
