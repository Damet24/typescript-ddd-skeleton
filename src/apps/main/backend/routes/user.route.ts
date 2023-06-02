import { type Request, type Response, type NextFunction, type Router } from 'express'
import { body } from 'express-validator'
import { type GetUserController } from '../controllers/user/GetUserController'
import container from '../dependencies'
import { validateReqSchema } from '.'
import { type PostUserController } from '../controllers/user/PostUserController'

export const register = (router: Router): void => {
  const reqSchema = [
    body('name').exists().isString()
  ]

  const createUserController = container.get<PostUserController>('Apps.main.backend.PostUserController')
  router.post('/user', reqSchema, validateReqSchema, async (req: Request, res: Response, next: NextFunction) => {
    await createUserController.run(req, res, next)
  })

  const getUserController = container.get<GetUserController>('Apps.main.backend.GetUserController')
  router.get('/user', async (req: Request, res: Response, next: NextFunction) => {
    await getUserController.run(req, res, next)
  })
}
