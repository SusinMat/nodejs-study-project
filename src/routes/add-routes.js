import { Routes } from "./routes.js";
import "./tables.js";

Routes.addRoutes = (app) => {
    Routes.addHealth(app);
    Routes.addTableRoutes(app);
};
