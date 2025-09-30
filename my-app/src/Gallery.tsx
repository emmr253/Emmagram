import ImageModal from "./ImageModal";

interface Gallery {
    images: string[];
}

const Gallery: React.FC<Gallery> = ({ images }) => {    
    return (
        images.map((url, index) => (
            <img 
                key={index}
                src={url}
                style={{ height: "100px", width: "100px", margin: "5px", objectFit: "cover", cursor: "pointer", backgroundColor:"khaki" }} 
                onClick={() => {
                    <ImageModal url={url}/>
                    console.log("Clicked image URL:", url)}
                }
            />
        ))
    )
}

export default Gallery;