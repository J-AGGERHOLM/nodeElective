import db from "./connection.js";

console.log(process.argv.includes("--delete"))
//process.argv.find((argument) => argument === "--delete")
const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS ingredients;`)
    await db.exec(`DROP TABLE IF EXISTS recipes;`)
}

/* 
.exec() //Run DCL/DDL (with no parameters)
.run() // run queries without teturning data
.all() //run a query and retrieve the resut set
*/

/* Conventions for sql 
    use snake case
    plural for tables
    use lowercase for tables

*/

//DDL
//ingredients, recipies
await db.exec(`
    CREATE TABLE recipes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name VARCHAR(100) NOT NULL,
        description TEXT,
        minutes_to_cook INTEGER
    );

    CREATE TABLE ingredients(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id INTEGER,
        ingredient_name TEXT NOT NULL,
        units INTEGER,
        unit_of_measurement TEXT CHECK(unit_of_measurement IN ("l", "kg", "unit")),
        FOREIGN KEY(recipe_id) REFERENCES recipes(id)
    );
`);

//DML
//seeding
if (deleteMode) {
    await db.run(`INSERT INTO recipes (recipe_name) VALUES ('Potato Pancakes');`);
    await db.run(`INSERT INTO recipes VALUES ('2', 'Baked Potato', "Also known as a jacket potato. It's a treat in the winter months.", 12);`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (1, 'flour', '0.06', 'kg')`);
    await db.run(`INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES (2, 'bacon', '1', 'kg')`);
}