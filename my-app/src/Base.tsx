import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ImageModal from "./ImageModal.tsx";
import { useState } from "react";
import NewImageField from "./NewImageField.tsx";
import Gallery from "./Gallery.tsx";

// createRoot(document.getElementById("root")!).render(
const Base: React.FC = () => {
  const [imageURLs, setImageURLs] = useState([""]);
  
  function addImageUrl(newURL: string) {
    setImageURLs(() => [...imageURLs, newURL]);
  }
  return (
    <>
      <NewImageField addImage={addImageUrl} />
      <Gallery images={imageURLs} />
      
      {/* "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=357&h=357"} */}
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base />
  </StrictMode>
);

export default Base;
