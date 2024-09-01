"use client";
import { useFormStatus } from "react-dom";
function MealsFormSubmit() {
  // 0.***Hooks***
  const { pending } = useFormStatus();
  // 1.***State***
  // 2.***Functions***
  // 3.***Render***

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}

export default MealsFormSubmit;
