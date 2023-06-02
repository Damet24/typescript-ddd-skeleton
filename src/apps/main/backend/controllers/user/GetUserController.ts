import { type UseCase } from '../../../../../Contexts/Shared/domain/UseCase'
import { type Controller } from '../Controller'
import type { Request, Response, NextFunction } from 'express'

export class GetUserController implements Controller {
  constructor (
    private readonly UseCase: UseCase<{ name: string }, void>
  ) {}

  async run (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.UseCase.run(req.body)
    } catch (error) {
      next(error)
    }
  }
}
