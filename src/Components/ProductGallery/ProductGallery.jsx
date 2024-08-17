
import { useState } from 'react';
import './ProductGallery.css';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={selectedImage} alt="Selected Product" />
      </div>
      <div className="thumbnail-gallery">
        {images.map((imgArray, index) => (
          <img
            key={index}
            src={imgArray[0]}
            alt={`Product ${index + 1}`}
            onClick={() => setSelectedImage(imgArray[0])} 
            className={selectedImage === imgArray[0] ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
