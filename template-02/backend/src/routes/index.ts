import { Router, Request, Response, NextFunction } from 'express'

// add controller here
import * as echo from '../controllers/echo'

const router = Router()

router.use('*', (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Expires', '-1')
  res.setHeader('Cache-Control', 'must-revalidate, private')
  next()
})

// add router here
router.get('/echo', echo.echo)

export default router
