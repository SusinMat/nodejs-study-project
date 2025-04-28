import { Routes } from "./routes.js";
import { db } from "../db/db.ts";

Routes.addTableRoutes = (app) => {
    app.post("/tables/create", (request, response) => {
        db.createTables();
        response.statusCode = 200;
        response.end();
    });

    app.post("/tables/drop", (request, response) => {
        db.dropTables();
        response.statusCode = 200;
        response.end();
    });
};
