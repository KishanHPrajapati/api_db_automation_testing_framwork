import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export async function createConnection() {

  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  await client.connect();
  console.log('Database connected successfully');
  return client;
}