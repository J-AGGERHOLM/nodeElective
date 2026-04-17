import db from "./connection.js";

console.log(process.argv.includes("--delete"))
const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS users;`)
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
        role TEXT CHECK ( role IN ("Admin", "user))
    );
`);

//DML
//seeding
if (deleteMode) {
    await db.run(`INSERT INTO users (recipe_name) VALUES ('Potato Pancakes');`);
    await db.run(`INSERT INTO recipes VALUES ('2', 'Baked Potato', "Also known as a jacket potato. It's a treat in the winter months.", 12);`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1, 'flour', '0.06', 'kg')`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (2, 'bacon', '1', 'kg')`);
}