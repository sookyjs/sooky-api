import { Router } from "express"
import admin from "./routes/admin/index.js"
import store from "./routes/store/index.js"
import auth from "./routes/auth/index.js"

// guaranteed to get dependencies
export default () => {
  const app = Router()

  admin(app)
  auth(app)
  store(app)

  return app
}