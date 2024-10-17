import './PriceTag.css';

const PriceTag = ({ price, originalPrice, discount }) => {
  return (
    <div className="price-tag">
      <span className="current-price">${price.toFixed(2)}</span>
      {discount && (
        <span className="discount">{discount}% OFF</span>
      )}
      {originalPrice && (
        <span className="original-price">${originalPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

export default PriceTag;
