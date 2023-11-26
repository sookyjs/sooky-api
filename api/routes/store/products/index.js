import { Router } from "express"
import middlewares from "../../../middlewares/index.js"
import listProducts from "./list-products.js"
import createProduct from "./create-product.js"

const route = Router()

export default app => {
  app.use("/products", route)

  route.get("/", listProducts)
  route.post("/create-product", middlewares.authenticate, createProduct)

  return app
}