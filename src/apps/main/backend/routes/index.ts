import type { Router, Request, Response, NextFunction } from 'express'
import fs from 'node:fs'
import httpStatus from 'http-status'
import { validationResult } from 'express-validator'

import path from 'node:path'
import { Responses } from '../../../../Contexts/Shared/infrastructure/Responses'

export function registerRoutes (router: Router): void {
  const routes = fs.readdirSync(path.resolve(__dirname, '.'))
    .filter(item => item.endsWith('route.ts'))
    .map(item => item.slice(0, -3))

  routes.forEach(route => { register(route, router) })
}

function register (routePath: string, router: Router): void {
  const route = require(path.resolve(__dirname, routePath))
  route.register(router)
}

export function validateReqSchema (req: Request, res: Response, next: NextFunction): void {
  const validationErrors = validationResult(req)
  if (validationErrors.isEmpty()) {
    next(); return
  }
  const errors = validationErrors.array().map((err: any) => {
    return ({ [err.path]: err.msg })
  })

  const uniqueArray = errors.filter((obj, index, self) =>
    index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(obj))
  )

  res.status(httpStatus.UNPROCESSABLE_ENTITY).json(new Responses()
    .error(
      httpStatus.UNPROCESSABLE_ENTITY,
      httpStatus[httpStatus.UNPROCESSABLE_ENTITY],
      uniqueArray
    ))
}
