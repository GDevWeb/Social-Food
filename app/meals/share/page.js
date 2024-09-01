"use client";
import { shareMeal } from "@/lib/actions";
import { useState } from "react"; // Use React's useState hook
import ImagePicker from "../image-picker";
import MealsFormSubmit from "../meals/meals-form-submit";
import classes from "./page.module.css";

export default function ShareMealPage() {
  // ***State***
  const [state, setState] = useState({ message: null });

  // ***Functions***
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const result = await shareMeal(formData);

    if (result.message) {
      setState({ message: result.message });
    }
  };

  // ***Render***
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name={"image"} />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
