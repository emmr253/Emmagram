import "./NewImageField.css";
import { useState } from "react";
import type { NewImageFieldProps } from "./Interfaces";

const NewImageField: React.FC<NewImageFieldProps> = ({
  addImageByTitleAndURL,
  setAllImages,
  setNewModal,
}) => {
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [currentImageTitle, setCurrentImageTitle] = useState("");

  return (
    <form id="newImageForm">
      <input
        id="newImageTitle"
        type="text"
        value={currentImageTitle}
        onChange={(event) => setCurrentImageTitle(event.target.value)}
        placeholder="Enter image title here"
      />
      <input
        id="newImageUrl"
        type="text"
        value={currentImageUrl}
        onChange={(event) => setCurrentImageUrl(event.target.value)}
        placeholder="Enter image URL here"
      />
      <button
        id="submitImage"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addImageByTitleAndURL(currentImageTitle, currentImageUrl);
          console.log("Submitted URL:", currentImageUrl);
          setCurrentImageUrl("");
          setCurrentImageTitle("");
        }}
      >
        Submit
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setAllImages([]);
          setCurrentImageUrl("");
          setCurrentImageTitle("");
          setNewModal(<></>);
        }}
      >
        Clear Gallery
      </button>
    </form>
  );
};

export default NewImageField;
