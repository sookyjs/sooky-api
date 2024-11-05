import express from "express";
import expressListEndpoints from "express-list-endpoints";
import loaders from "./loaders/index.js";  // Assurez-vous que ce chemin est correct

const listRoutes = async () => {
  const app = express();
  await loaders({ expressApp: app });

  const routes = expressListEndpoints(app);
  console.log(routes);
};

listRoutes();
