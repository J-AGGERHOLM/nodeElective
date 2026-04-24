import db from "./connection";

const deletedFruit = await db.fruits.deleteOne({ name: "Apple" });

console.log(deletedFruit);