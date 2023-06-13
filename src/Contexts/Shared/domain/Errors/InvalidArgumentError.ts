
export class InvalidArgumentError extends Error {
  constructor () {
    super('Value must be defined')
    this.name = 'InvalidArgumentError'
  }
}
