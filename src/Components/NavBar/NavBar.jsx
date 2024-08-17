

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import IconCart from '../../../public/images/icon-cart.svg';
import Avatar from '../../../public/images/image-avatar.png';
import IconMenu from '../../../public/images/icon-menu.svg';
import IconClose from '../../../public/images/icon-close.svg';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const deleteProduct = () => {
   props.setQuantity(props.quantity-1);
    // setIsCartEmpty(true);
  };

  const totalAmount = 125.00 * props.quantity;

  return ( 
    <>
    <nav className="navbar">
      <div className="logo">
        sneakers
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={isMenuOpen ? IconClose : IconMenu} alt="Menu" />
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Collection</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Woman">Woman</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="icons">
        <div className="cart-icon" onClick={toggleCart}>
          <img src={IconCart} alt="Cart" />
          <span>{props.quantity}</span>
        </div>
        <img src={Avatar} alt="Profile" className="profile-pic" />
      </div>

      {/* Cart dropdown */}
      {isCartOpen && (
        <div className="cart-dropdown">
          <h4>Cart</h4>
          {props.quantity== 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="cart-filled">
              <div className="products">
                <div className="img">
                  <img src="/images/image-product-1-thumbnail.jpg" alt="product thumbnail" />
                </div>
                <div className="text">
                  <h5>Autumn Limited Edition...</h5>
                   <p>
                    $125.00 &times; <em>{props.quantity}</em> <span>${totalAmount.toFixed(2)}</span>
                    </p> 
                 </div>
                 <img
                  className="delete"
                   onClick={deleteProduct}
                  src="/images/icon-delete.svg"
                  alt="delete icon"
                />
               </div>
               <div className="checkout">Checkout</div>
            </div>
         )}
         </div>
       )}
     </nav>
     </>
   );
 };

 export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import IconCart from '../../../public/images/icon-cart.svg';
// import Avatar from '../../../public/images/image-avatar.png';
// import IconMenu from '../../../public/images/icon-menu.svg';
// import IconClose from '../../../public/images/icon-close.svg';

// const Navbar = ({ quantity, clearCart }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const totalAmount = 125.00 * quantity;

//   return (
//     <nav className="navbar">
//       <div className="logo">sneakers</div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <img src={isMenuOpen ? IconClose : IconMenu} alt="Menu" />
//       </div>
//       <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
//         <li><Link to="/">Collection</Link></li>
//         <li><Link to="/Men">Men</Link></li>
//         <li><Link to="/Woman">Woman</Link></li>
//         <li><Link to="/About">About</Link></li>
//         <li><Link to="/Contact">Contact</Link></li>
//       </ul>
//       <div className="icons">
//         <div className="cart-icon" onClick={toggleCart}>
//           <img src={IconCart} alt="Cart" />
//           <span>{quantity}</span>
//         </div>
//         <img src={Avatar} alt="Profile" className="profile-pic" />
//       </div>

//       {isCartOpen && (
//         <div className="cart-dropdown">
//           <h4>Cart</h4>
//           {quantity === 0 ? (
//             <p>Your cart is empty</p>
//           ) : (
//             <div className="cart-filled">
//               <div className="products">
//                 <div className="img">
//                   <img src="/images/image-product-1-thumbnail.jpg" alt="product thumbnail" />
//                 </div>
//                 <div className="text">
//                   <h5>Autumn Limited Edition...</h5>
//                   <p>$125.00 × <em>{quantity}</em> <span>${totalAmount.toFixed(2)}</span></p>
//                 </div>
//                 <img
//                   className="delete"
//                   onClick={clearCart}
//                   src="/images/icon-delete.svg"
//                   alt="delete icon"
//                 />
//               </div>
//               <div className="checkout">Checkout</div>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
