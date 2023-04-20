import pkg from 'pg';

const { Pool } = pkg

const db = new Pool({
    user: "postgres",
    password: "07sepodu",
    host: "localhost",
    port: 5432,
    database: "test_task",
})


export { db}

