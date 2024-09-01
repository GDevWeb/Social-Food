import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed !"); //just to test error page
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  //we don't need to turn this function in asynchronous function because ...
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
