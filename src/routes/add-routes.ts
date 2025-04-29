import { Express } from "express";
import { Routes } from "./routes.ts";
import "./tables.ts";

function addRoutes(app: Express) {
    Routes.addHealth(app);
    Routes.addTableRoutes(app);
}

export { addRoutes };
