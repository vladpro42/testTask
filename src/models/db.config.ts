import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "test_task",
    "postgres",
    "07sepodu",
    {
        dialect: 'postgres',
        host: "localhost",
        port: 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        }
    }

);

export default sequelize