import pg from "pg";
const { Client } = pg;

class DB {
    constructor() {
        this.client = DB.newClient();
    }

    static newClient() {
        return new Client({
            user: "user",
            password: "pass",
            host: "nodejs-study-project-db-1",
            port: 5432,
            database: "db",
        });
    }

    async closeClient() {
        await this.client.end();
    }

    getClient() {
        return this.client;
    }

    async connectClient() {
        await this.client.connect();
    }

    async helloWorld() {
        try {
            const result = await this.client.query(
                "SELECT $1::text as message",
                ["Hello world!"]
            );
            console.log(result.rows[0].message); // Hello world!
        } catch (err) {
            console.error(err);
        }
    }

    async createTables() {
        await this.helloWorld();
    }

    async dropTables() {
        await this.helloWorld();
    }
}

export let db = new DB();
