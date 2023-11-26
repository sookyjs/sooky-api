import { Router } from "express"
import registerUser from "./sign-up.js"
import loginUser from "./sign-in.js"

const route = Router()

export default app => {
  app.use("/auth", route)

  route.post("/sign-in", loginUser)
  route.post("/sign-up", registerUser)

  return app
}