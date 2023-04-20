import pkg from 'pg';

const { Pool } = pkg

const pool = new Pool({
    user: "postgres",
    password: "07sepodu",
    host: "localhost",
    port: 5432,
    database: "test_task"
})


export { pool as db}