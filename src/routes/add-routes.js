import { Routes } from "./routes.js";
import "./tables.js";

function addRoutes(app) {
    Routes.addHealth(app);
    Routes.addTableRoutes(app);
}

export { addRoutes };
