import "dotenv/config";
import express from 'express';
import knex from 'knex';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const knexInstance = knex({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
});

// Test the database connection
knexInstance.raw('SELECT VERSION()').then(() => {
    console.log('Database connection successful');
}).catch((error) => {
    console.error('Database connection failed:', error);
});

export default knexInstance;
