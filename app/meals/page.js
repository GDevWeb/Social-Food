import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";
import MealsGrid from "./meals/meals-grid";
import classes from "./page.module.css";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
      <Suspense fallback={<MealsLoadingPage />}>
        <Meals />
      </Suspense>
    </>
  );
}

export default MealsPage;
