import NewImageField from "./NewImageField.tsx";
import Gallery from "./Gallery.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import type { ImageValues } from "./Interfaces.ts";

const Base: React.FC = () => {
  const [allImages, setAllImages] = useState<ImageValues[]>([]);
  const [newModal, setNewModal] = useState(<></>);

  console.log(
    "Current images:",
    allImages.map((img) => "[id:" + img.id + ", title: " + img.title + ", url: " + img.url + ", liked: " + img.liked + "]")
  );
  function addImageByTitleAndURL(newTitle: string, newURL: string) {
    setAllImages([
      ...allImages,
      { id: allImages.length+1, url: newURL, title: newTitle, liked: false, comments: [] }, // adds as an ImageValues
    ]);
  }
  return (
    <>
      <NewImageField
        addImageByTitleAndURL={addImageByTitleAndURL}
        setAllImages={setAllImages}
        setNewModal={setNewModal}
      />
      <Gallery images={allImages} setNewModal={setNewModal} />
      {newModal}
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Base />
  </StrictMode>
);

export default Base;
