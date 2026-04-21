import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("users.db");

export default db;
