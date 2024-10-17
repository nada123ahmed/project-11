import { useState } from 'react';
import './AddToCartButton.css';

const AddToCartButton = (props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 0 && setQuantity(quantity - 1);

  // const addToCart = () => {
  //   console.log(`Added ${quantity} items to cart`);
    
  // };
  function addToCart(){
    props.handleAddToCart(quantity)
  }

  return (
    <div className="quantity-cart">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button className="add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
