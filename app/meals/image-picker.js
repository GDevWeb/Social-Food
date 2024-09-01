"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const handlePickClick = () => {
    imageInput.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        className={classes.input}
        ref={imageInput}
      />
      <button
        type="button"
        className={classes.button}
        onClick={handlePickClick}
      >
        Pick an image
      </button>
    </div>
  );
}

export default ImagePicker;
