import { type UserId } from './UserId'
import { type UserName } from './UserName'

export class User {
  id: UserId
  name: UserName

  constructor (id: UserId, name: UserName) {
    this.id = id
    this.name = name
  }
}
