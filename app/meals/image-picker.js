"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
function ImagePicker({ label, name }) {
  // 0.***Hooks***
  const imageInput = useRef();
  // 1.***State***
  const [imagePickedPreview, setImagePickedPreview] = useState();
  // 2.***Functions***
  const handlePickClick = () => {
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    } //if user doesn't select a file

    const fileReader = new FileReader(); //Js method, read the content of file stored on user's computer

    fileReader.onload = () => {
      setImagePickedPreview(fileReader.result);
    };

    fileReader.readAsDataURL(file); //as the reading is achieved, converts the data's file into URL
  };
  // 3.***Render***
  return (
    <div className={classes.picker}>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePickedPreview && <p>No image picked yet !</p>}
          {imagePickedPreview && (
            <Image
              src={imagePickedPreview}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <label htmlFor={name}>{label}</label>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/webp"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
      </div>
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
