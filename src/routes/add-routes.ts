import { Express } from "express";
import { Routes } from "./routes.js";
import "./tables.js";

function addRoutes(app: Express) {
    Routes.addHealth(app);
    Routes.addTableRoutes(app);
}

export { addRoutes };
