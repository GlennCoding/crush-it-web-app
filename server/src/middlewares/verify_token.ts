import {Request, Response} from "express"
import config from "../config/index"
import jwt from "jsonwebtoken"

const verifyToken = async (req: Request, res: Response, next: any) => {
  const token = req.header("authorization")?.split(" ")[1]

  if (!token)
    return res.json({
      message: "Token not found",
      success: false
    })
  let payload: any
  try {
    payload = await jwt.verify(token, config.jWTSecretKey)
  } catch {
    return res.json({
      message: "Token is invalid.",
      success: false
    })
  }

  req.body.userId = payload.id
  next()
}

export {verifyToken}
