import ImageModal from "./ImageModal";
import { useState } from "react";
import type { GalleryProps } from "./Interfaces";
import "./Gallery.css";

const Gallery: React.FC<GalleryProps> = ({ post: images, setNewModal }) => {
  return images.filter(Boolean).map((img) => (
    <img
      className="gallery-image"
      key={img.id}
      src={img.url}
      onClick={() => {
        setNewModal(<ImageModal post={img} setNewModal={setNewModal} />);
        // console.log("Clicked image URL:", img.url)}
      }}
    />
  ));
};

export default Gallery;
