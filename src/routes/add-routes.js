import { Routes } from "./routes.js";
import "./tables.ts";

function addRoutes(app) {
    Routes.addHealth(app);
    Routes.addTableRoutes(app);
}

export { addRoutes };
