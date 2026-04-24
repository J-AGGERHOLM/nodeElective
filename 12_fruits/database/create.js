import db from "./connection";

const fruitCreated = await db.fruits.insertOne({ name: "Apple", price: 99.99 });

console.log(fruitCreated);
