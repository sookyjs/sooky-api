import routes from "../api/index.js"
import config from "../config/index.js";

export default async ({ expressApp }) => {
  expressApp.use(config.api.prefix, routes);
  return expressApp;
}