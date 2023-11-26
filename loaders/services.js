import { Lifetime } from "awilix"

/**
 * Registers all services in the services directory
 */
export default ({ container }) => {
  let loadPath = "services/*.js"

  if (process.env.NODE_ENV === "test") {
    loadPath = "../services/__mocks__/*.js"
  }

  // service/auth.js -> authService
  container.loadModules([loadPath], {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    formatName: 'camelCase',
    esModules: true,
  })
}
