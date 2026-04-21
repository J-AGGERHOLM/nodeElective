import db from "./connection.js";
import { hashPassword } from "../util/bcryptCompare.js";

console.log(process.argv.includes("--delete"));
const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
  await db.exec(`DROP TABLE IF EXISTS users;`);
}

/* Conventions for sql 
    use snake case
    plural for tables
    use lowercase for tables

*/

//DDL
await db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(100) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT CHECK ( role IN ('Admin', 'User'))
    );
`);

//DML
//seeding
if (deleteMode) {
  const hashedPassword = await hashPassword('secretPassword');

  //this was called parameterizing a query (?)
  //to prevent SQL injections.
  await db
    .prepare(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`)
    .run('admin01', hashedPassword, 'Admin');
  await db
    .prepare(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`)
    .run('user01', hashedPassword, 'User');
}
