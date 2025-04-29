import { Express, Request, Response } from "express";
import { Routes } from "./routes.ts";
import { db } from "../db/db.ts";

declare module "./routes.ts" {
    namespace Routes {
        export function addTableRoutes(app: Express): void;
}
}

Routes.addTableRoutes = function (app: Express) {
    app.post("/tables/create", (request: Request, response: Response) => {
        db.createTables();
        response.statusCode = 200;
        response.end();
    });

    app.post("/tables/drop", (request: Request, response: Response) => {
        db.dropTables();
        response.statusCode = 200;
        response.end();
    });
}

// declare module "./routes.ts" {
//     interface Routes {
//         addTableRoutes(app: Express): void;
//     }
// }

// Routes.prototype.addTableRoutes = function (app: Express) {
//     app.post("/tables/create", (request: Request, response: Response) => {
//         db.createTables();
//         response.statusCode = 200;
//         response.end();
//     });

//     app.post("/tables/drop", (request: Request, response: Response) => {
//         db.dropTables();
//         response.statusCode = 200;
//         response.end();
//     });
// };
