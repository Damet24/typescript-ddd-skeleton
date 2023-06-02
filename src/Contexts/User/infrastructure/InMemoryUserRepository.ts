import { User } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  async list (): Promise<User[]> {
    return [
      new User(null, 'John'),
      new User(null, 'Anna'),
      new User(null, 'Daniel')
    ]
  }
}
