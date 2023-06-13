import { User } from '../domain/User'
import { v4 as uuidv4 } from 'uuid'
import { UserId } from '../domain/UserId'
import { type UserRepository } from '../domain/UserRepository'
import { UserName } from '../domain/UserName'

const users = [
  new User(new UserId(uuidv4()), new UserName('John')),
  new User(new UserId(uuidv4()), new UserName('Anna')),
  new User(new UserId(uuidv4()), new UserName('Daniel')),
  new User(new UserId(uuidv4()), new UserName('Diana'))
]

export class InMemoryUserRepository implements UserRepository {
  async save (name: string): Promise<void> {
    const id = new UserId(uuidv4())
    const userName = new UserName(name)
    const newUser = new User(id, userName)
    users.push(newUser)
  }

  async list (): Promise<User[]> {
    return users
  }
}
