import { useState } from "react";
import "./NewImageField.css";

interface NewImageField {
  addImage: (newURL: string) => void;
}

const NewImageField: React.FC<NewImageField> = ({ addImage }) => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <form
      style={{
        float: "left",
        height: "8vh",
        width: "40vh",
        backgroundColor: "lightgrey",
        padding: "20px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        setImageUrl("");
        console.log("Submitted URL:", imageUrl);
        addImage(imageUrl);
      }}
    >
      <input
        id="newImageUrl"
        type="text"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        placeholder="Enter image URL here"
        style={{ width: "80%" }}
      />
      <button id="submitImage" type="submit" style={{ width: "80%" }}>
        Submit
      </button>
    </form>
  );
};

export default NewImageField;
