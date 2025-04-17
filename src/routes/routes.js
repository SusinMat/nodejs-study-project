export class Routes {
    constructor() {}

    static addHealth(app) {
        app.get("/health", (request, response) => {
            const responseBody = "I'm alive.";
            response.statusCode = 200;
            response.setHeader("Content-Type", "text.plain");
            response.write(responseBody);
            response.end();
        });
    }
}
