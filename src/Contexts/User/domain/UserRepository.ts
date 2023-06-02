import { type User } from './User'

export interface UserRepository {
  list: () => Promise<User[]>
  save: (name: string) => Promise<void>
}
