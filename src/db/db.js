import pg from "pg";
const { Client, Pool } = pg;

class DB {
    constructor() {
        this.pool = DB.newPool();
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

    static newPool() {
        return new Pool({
            user: "user",
            password: "pass",
            host: "nodejs-study-project-db-1",
            port: 5432,
            database: "db",
        });
    }

    async connectPool() {
        this.pool.connect();
    }

    async helloWorld() {
        const client = DB.newClient();
        try {
            await client.connect();
            const result = await client.query("SELECT $1::text as message", [
                "Hello world!",
            ]);
            console.log(result.rows[0].message); // Hello world!
        } catch (error) {
            console.error(error);
        } finally {
            client.end();
        }
    }

    async createTables() {
        try {
            await this.pool.query(`
                CREATE TABLE Department (
	                name VARCHAR(255)
                );
            `);
        } catch (error) {
            console.error(error);
        }
    }

    async dropTables() {
        try {
            await this.pool.query(`
                DO $$ DECLARE
                    r RECORD;
                BEGIN
                    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = current_schema()) LOOP
                    EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
                    END LOOP;
                END $$;
            `);
        } catch (error) {
            console.error(error);
        }
    }
}

export let db = new DB();
