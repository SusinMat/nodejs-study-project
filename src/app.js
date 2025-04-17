import express from "express";
import { db } from "./db/db.js";
import { Routes } from "./routes/routes.js";

const app = express();
const port = 4080;

await db.connectPool();
await db.helloWorld();

Routes.addRoutes(app);

app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
});
