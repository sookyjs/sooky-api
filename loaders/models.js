import { Lifetime } from "awilix"

/**
 * Registers all models in the model directory
 */
export default ({ container }) => {
  // service/auth.js -> authService
  container.loadModules(["models/*.js"], {
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
    },
    formatName: 'camelCase',
    esModules: true,
  })
}