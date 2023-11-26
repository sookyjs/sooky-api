import { createContainer, asValue } from "awilix"
import modelsLoader from "./models.js"
import servicesLoader from "./services.js"
import expressLoader from "./express.js"
import mongooseLoader from "./mongoose.js"
import apiLoader from "./api.js"
import Logger from "./logger.js"

export default async ({ expressApp }) => {
    const container = createContainer()
    container.registerAdd = function(name, registration) {
      let boardKey = name + "_BOARD"
  
      if (this.registrations[boardKey] === undefined) {
        this.register(boardKey, asValue([]))
      }
      let board = this.resolve(boardKey)
  
      if (this.registrations[name] === undefined) {
        this.register(name, asArray(board))
      }
      board.unshift(registration)
  
      return this
    }.bind(container)
  
    container.register({
      logger: asValue(Logger),
    })

    await modelsLoader({ container })
    Logger.info("Models initialized")

    await servicesLoader({ container })
    Logger.info("Services initialized")
  
    await mongooseLoader()
    Logger.info("MongoDB Intialized")
  
    await expressLoader({ app: expressApp })
    Logger.info("Express Intialized")
  
    // Add the registered services to the request scope
    expressApp.use((req, res, next) => {
      req.scope = container.createScope()
      next()
    })
  
    await apiLoader({ app: expressApp })
    Logger.info("API initialized")

  }
  
  function asArray(resolvers) {
    return {
      resolve: (container, opts) => resolvers.map(r => container.build(r, opts)),
    }
  }