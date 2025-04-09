import pg from "pg";
const { Client } = pg;

export const setUp = async () => {
    const client = new Client({
        user: "user",
        password: "pass",
        host: "nodejs-study-project-db-1",
        port: 5432,
        database: "db",
    });
    await client.connect();

    try {
        const result = await client.query("SELECT $1::text as message", [
            "Hello world!",
        ]);
        console.log(result.rows[0].message); // Hello world!
    } catch (err) {
        console.error(err);
    } finally {
        await client.end();
    }
};
