import {Request, Response} from "express"
import * as userServices from "../services/db/user_services"

const getUser = async (req: Request, res: Response) => {
  const user = await userServices.getUserById(req.body.userId)
  if (!user) {
    return res.json({
      success: false,
      message: "User not found."
    })
  }
  res.json({
    success: true,
    user: user
  })
}

export {getUser}
