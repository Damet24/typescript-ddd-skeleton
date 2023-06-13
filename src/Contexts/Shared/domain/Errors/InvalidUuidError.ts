
export class InvalidUuidError extends Error {
  constructor () {
    super('Uuid is invalid')
    super.name = 'InvalidUuidError'
  }
}
