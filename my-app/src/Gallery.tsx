import ImageModal from "./ImageModal";
import { useState } from "react";
import type { GalleryProps } from "./Interfaces";
import "./Gallery.css";

const Gallery: React.FC<GalleryProps> = ({ images, setNewModal }) => {  
    return (
        images.filter(Boolean).map((img, index) => (
            <img 
                className="gallery-image"
                key={img.id}
                src={img.url}
                onClick={() => {
                    setNewModal(<ImageModal values={img} setNewModal={setNewModal} />);
                    // setSelectedImage(url);
                    console.log("Clicked image URL:", img.url)}
                }
            />
        ))
        
    )
}

export default Gallery;