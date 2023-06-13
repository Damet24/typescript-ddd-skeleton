import httpStatus from 'http-status'
import { type Responses } from '../../../../../Contexts/Shared/infrastructure/Responses'
import { type Controller } from '../Controller'
import type { Request, Response, NextFunction } from 'express'
import { type ListAllUserUseCase } from '../../../../../Contexts/User/application/Get/ListAllUserUseCase'

export class GetUserController implements Controller {
  constructor (
    private readonly UseCase: ListAllUserUseCase,
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
