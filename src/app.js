import express from "express";
import { db } from "./db/db.js";

const app = express();
const port = 4080;

app.get("/health", (request, response) => {
    const responseBody = "I'm alive.";
    response.statusCode = 200;
    response.setHeader("Content-Type", "text.plain");
    response.write(responseBody);
    response.end();
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});

await db.connectClient();
await db.helloWorld();
