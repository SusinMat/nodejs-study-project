import express from "express";
import { db } from "../db/db.js";

export class Routes {
    constructor() {}

    static addRoutes(app) {
        app.get("/health", (request, response) => {
            const responseBody = "I'm alive.";
            response.statusCode = 200;
            response.setHeader("Content-Type", "text.plain");
            response.write(responseBody);
            response.end();
        });

        app.post("/create-tables", (request, response) => {
            db.createTables();
            response.statusCode = 200;
            response.end();
        });

        app.post("/drop-tables", (request, response) => {
            db.dropTables();
            response.statusCode = 200;
            response.end();
        });
    }
}
