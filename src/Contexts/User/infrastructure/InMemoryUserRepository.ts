import { User } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'

const users = [
  new User(null, 'John'),
  new User(null, 'Anna'),
  new User(null, 'Daniel')
]

export class InMemoryUserRepository implements UserRepository {
  async save (name: string): Promise<void> {
    const newUser = new User(null, name)
    users.push(newUser)
  }

  async list (): Promise<User[]> {
    return users
  }
}
