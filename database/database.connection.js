import dotenv from "dotenv"
import pg from "pg";
const { Pool } = pg

dotenv.config()
const configDatabase = {
    connectionString: process.env.DATABASE_URL
}

process.env.PROD === "production" ? configDatabase.ssl = true : configDatabase.ssl = false

export const db = new Pool(configDatabase)