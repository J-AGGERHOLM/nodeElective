import db from "./connection";

const fruitUpdated = await db.fruits.updateOne({name: Apple}, {$set: {price:10.99}})

console.log(fruitUpdated)