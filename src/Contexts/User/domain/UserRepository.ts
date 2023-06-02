import { type User } from './User'

export interface UserRepository {
  list: () => Promise<User[]>
}
