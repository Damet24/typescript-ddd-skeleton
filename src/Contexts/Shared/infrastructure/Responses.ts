
export class Responses {
  success (status: number, msg: string, body: any): { error: null, body: any, status: number } {
    return {
      error: null,
      body: { msg, data: body },
      status
    }
  }

  error (status: number, msg: string, body: any): { error: string, body: any, status: number } {
    return {
      error: msg,
      body,
      status
    }
  }
}
