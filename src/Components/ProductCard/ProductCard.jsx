// import ProductGallery from '../ProductGallery/ProductGallery';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';
// import PriceTag from '../PriceTag/PriceTag';

// import './ProductCard.css';

// const ProductCard = () => {
//   const product = {
//     price: 125.00,
//     originalPrice: 250.00,
//     discount: 50,
//     images: [
//       '/images/image-product-1-thumbnail.jpg',
//       '/images/image-product-2-thumbnail.jpg',
//       '/images/image-product-3-thumbnail.jpg',
//       '/images/image-product-4-thumbnail.jpg',
//     ],
//   };

//   return (
//     <div className="product-card">
//       <ProductGallery images={product.images} />
//       <div className="product-details">
//         <h2 className="product-title">Fall Limited Edition Sneakers</h2>
//         <p className="product-description">
//           These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
//         </p>
//         <PriceTag 
//           price={product.price} 
//           originalPrice={product.originalPrice} 
//           discount={product.discount} 
//         />
//         <div className="product-actions">
//           <AddToCartButton />
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import ProductGallery from '../ProductGallery/ProductGallery';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';
// import PriceTag from '../PriceTag/PriceTag';
// import './ProductCard.css';

// const ProductCard = (props  ) => {
//   const product = {
//     price: 125.00,
//     originalPrice: 250.00,
//     discount: 50,
//     images: [
//       '/images/image-product-1-thumbnail.jpg',
//       '/images/image-product-2-thumbnail.jpg',
//       '/images/image-product-3-thumbnail.jpg',
//       '/images/image-product-4-thumbnail.jpg',
//     ],
//   };

 
//   function handleAddToCart(quantity){
// props.test(quantity)
//   }

//   return (
//     <div className="product-card">
//       <ProductGallery images={product.images} />
//       <div className="product-details">
//         <h2 className="product-title">Fall Limited Edition Sneakers</h2>
//         <p className="product-description">
//           These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
//         </p>
//         <PriceTag
//           price={product.price}
//           originalPrice={product.originalPrice}
//           discount={product.discount}
//         />
//         <div className="product-actions">
//           <AddToCartButton handleAddToCart ={handleAddToCart} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import ProductGallery from '../ProductGallery/ProductGallery';
// import AddToCartButton from '../AddToCartButton/AddToCartButton';
// import PriceTag from '../PriceTag/PriceTag';
// import './ProductCard.css';

// const ProductCard = (props) => {
//   const product = {
//     price: 125.00,
//     originalPrice: 250.00,
//     discount: 50,
//     image1: '/images/image-product-1-thumbnail.jpg',
//     image2: '/images/image-product-2-thumbnail.jpg',
//     image3: '/images/image-product-3-thumbnail.jpg',
//     image4: '/images/image-product-4-thumbnail.jpg',
//   };

//   function handleAddToCart(quantity) {
//     props.test(quantity);
//   }

//   return (
//     <div className="product-card">
//       <ProductGallery 
//         image1={product.image1} 
//         image2={product.image2} 
//         image3={product.image3} 
//         image4={product.image4} 
//       />
//       <div className="product-details">
//         <h2 className="product-title">Fall Limited Edition Sneakers</h2>
//         <p className="product-description">
//           These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
//         </p>
//         <PriceTag
//           price={product.price}
//           originalPrice={product.originalPrice}
//           discount={product.discount}
//         />
//         <div className="product-actions">
//           <AddToCartButton handleAddToCart={handleAddToCart} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;













import React from 'react';
import ProductGallery from '../ProductGallery/ProductGallery';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import PriceTag from '../PriceTag/PriceTag';
import './ProductCard.css';

const ProductCard = (props) => {
  const product = {
    price: 125.00,
    originalPrice: 250.00,
    discount: 50,
    images: [
      ['/images/image-product-1-thumbnail.jpg'], 
      ['/images/image-product-2-thumbnail.jpg'],
      ['/images/image-product-3-thumbnail.jpg'],
      ['/images/image-product-4-thumbnail.jpg'],
    ],
  };

  function handleAddToCart(quantity) {
    props.test(quantity);
  }

  return (
    <div className="product-card">
      <ProductGallery images={product.images} />
      <div className="product-details">
        <h2 className="product-title">Fall Limited Edition Sneakers</h2>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear,<br></br> companion. Featuring a durable rubber outer sole, they'll<br></br> withstand everything the weather can offer.
        </p>
        <PriceTag
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
        />
        <div className="product-actions">
          <AddToCartButton handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
