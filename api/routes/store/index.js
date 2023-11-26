import { Router } from "express"
import jobRoutes from "./products/index.js"

const route = Router()

export default app => {
  app.use("/store", route)

  jobRoutes(route)

  return app
}