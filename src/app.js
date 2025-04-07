import pg from "pg";
const { Client } = pg;
import express from "express";

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

const client = new Client({
    user: "user",
    password: "pass",
    host: "nodejs-study-project-db-1",
    port: 5432,
    database: "db",
});
await client.connect();

try {
    const res = await client.query("SELECT $1::text as message", [
        "Hello world!",
    ]);
    console.log(res.rows[0].message); // Hello world!
} catch (err) {
    console.error(err);
} finally {
    await client.end();
}
