"use client";

import classes from "../../app/page.module.css";
function Error() {
  return (
    <main className={classes.error}>
      <h1>An error occurred</h1>
      <p>Failed to fetch meal data. Please try again later</p>
    </main>
  );
}

export default Error;
