import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // handle image :
  const extension = meal.image.name.split(".").pop();
  // create an unique fileName to avoid override another image with the same fileName
  const fileName = `${meal.slug}.${extension}`;

  // storing the file
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  // saving objet into DB :
  db.prepare(
    `
    INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,    
      @image,
      @slug
      )
    `
  ).run(meal);
}
