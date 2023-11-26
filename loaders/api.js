import routes from "../api/index.js"

export default async ({ app }) => {
  app.use("/", routes())
  return app
}