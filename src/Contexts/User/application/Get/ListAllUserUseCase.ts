import { type UseCase } from '../../../Shared/domain/UseCase'
import { type User } from '../../domain/User'
import { type UserRepository } from '../../domain/UserRepository'

export class ListAllUserUseCase implements UseCase<any, User[]> {
  constructor (
    private readonly UserRepository: UserRepository
  ) {}

  async run (_params: any): Promise<User[]> {
    return await this.UserRepository.list()
  }
}
