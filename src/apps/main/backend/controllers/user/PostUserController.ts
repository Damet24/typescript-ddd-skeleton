import httpStatus from 'http-status'
import { type UseCase } from '../../../../../Contexts/Shared/domain/UseCase'
import { type Responses } from '../../../../../Contexts/Shared/infrastructure/Responses'
import { type Controller } from '../Controller'
import type { Request, Response, NextFunction } from 'express'

export class PostUserController implements Controller {
  constructor (
    private readonly UseCase: UseCase<{ name: string }, void>,
    private readonly responses: Responses
  ) {}

  async run (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.UseCase.run(req.body)
      res.status(httpStatus.CREATED).json(this.responses.success(httpStatus.CREATED, '', null))
    } catch (error) {
      next(error)
    }
  }
}
