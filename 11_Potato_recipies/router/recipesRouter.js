import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/api/recipes", async (req, res) => {
  const recipes = await db.all("SELECT * FROM recipes;");

  console.log(recipes);

  res.send({ data: recipes });
});

router.post("/api/recipes", async (req, res) => {
  const { recipeName, description, minutesToCook } = req.body;

  const result = await db.run(
    `INSERT INTO recipes
    (recipe_name, description, minutes_to_cook)
    VALUES (?,?,?) 
    `[(recipeName, description, minutesToCook)],
  );

  res.send({ data: { id: result.lastID } });
});

export default router;
