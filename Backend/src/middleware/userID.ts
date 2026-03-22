import { randomUUID } from "crypto"
import { Request, Response, NextFunction } from "express"

export const userID = (req: Request, res: Response, next: NextFunction) => {
  req.user_id = randomUUID()
  next()
}