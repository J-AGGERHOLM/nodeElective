import db from "./connection.js";

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
    CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(100) NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT CHECK ( role IN ("Admin", "User"))
    );
`);

//DML
//seeding
if (deleteMode) {
  await db.run(`INSERT INTO users (username, password, role) VALUES ('admin01', 'secretPassword', 'Admin');`);
  await db.run(`INSERT INTO users (username, password, role) VALUES ('user01', 'secretPassword', 'User');`);
}
