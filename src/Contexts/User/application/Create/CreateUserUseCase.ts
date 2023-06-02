import { type UseCase } from '../../../Shared/domain/UseCase'
import { type UserRepository } from '../../domain/UserRepository'

export class CreateUserUseCase implements UseCase<{ name: string }, void> {
  constructor (
    private readonly userRepository: UserRepository
  ) {}

  async run (params: { name: string }): Promise<void> {
    await this.userRepository.save(params.name)
  }
}
