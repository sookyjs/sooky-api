import express from "express"
import loaders from "./loaders/index.js"
import Logger from "./loaders/logger.js"

const PORT = process.env.PORT || 9000

const startServer = async () => {
  const app = express()

  await loaders({ expressApp: app })

  app.listen(PORT, err => {
    if (err) {
      console.log(err)
      return
    }
    Logger.info(`Server is ready on port: ${PORT}!`)
  })
}

startServer()