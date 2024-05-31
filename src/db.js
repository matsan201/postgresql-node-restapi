import pg from 'pg';

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "1234",
    database: "nodepg",
    port: "5432"
})