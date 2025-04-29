import { Express, Request, Response } from "express";

export namespace Routes {
    export function addHealth(app: Express) {
        app.get("/health", (request: Request, response: Response) => {
            const responseBody = "I'm alive.";
            response.statusCode = 200;
            response.setHeader("Content-Type", "text.plain");
            response.write(responseBody);
            response.end();
        });
    }
}
