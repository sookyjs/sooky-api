import { Router } from "express"
import { StatusCodes } from "http-status-codes"

const nothing = async (req, res) => {
    try {
        res.status(StatusCodes.OK).json({success : true, msg : 'Successfully Created'});
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success : false, error : error.message});
    }
}

const route = Router()

export default app => {
  app.use("/admin", route)

  route.get("/", nothing)

  return app
}