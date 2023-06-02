import httpStatus from 'http-status'
import { type UseCase } from '../../../../../Contexts/Shared/domain/UseCase'
import { type Responses } from '../../../../../Contexts/Shared/infrastructure/Responses'
import { type Controller } from '../Controller'
import type { Request, Response, NextFunction } from 'express'
import { type User } from '../../../../../Contexts/User/domain/User'

export class GetUserController implements Controller {
  constructor (
    private readonly UseCase: UseCase<any, User[]>,
    private readonly responses: Responses
  ) {}

  async run (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.UseCase.run(req.body)
      res.status(httpStatus.OK).json(this.responses.success(httpStatus.OK, '', users))
    } catch (error) {
      next(error)
    }
  }
}
