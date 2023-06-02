
export class HttpError extends Error {
    statusCode: number
    payload: any | null
  
    constructor (statusCode: number, msg: any, payload: any | null = null) {
      super(msg)
      this.statusCode = statusCode
      this.payload = payload
    }
  }