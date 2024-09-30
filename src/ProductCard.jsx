import React, { useState } from 'react';

const ProductCard = ({ title, price, oldPrice, isSale, rating }) => {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart((prev) => !prev);
  };

  const styles = {
    card: {
      width: '18rem',
      position: 'relative',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    saleBadge: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: '#343a40',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '0.75rem',
    },
    price: {
      fontSize: '1.25rem',
    },
    oldPrice: {
      textDecoration: 'line-through',
      color: '#6c757d',
    },
  };

  return (
    <div className="card" style={styles.card}>
      {isSale && <div style={styles.saleBadge}>Sale</div>}
      <img
        src="https://via.placeholder.com/450x300"
        className="card-img-top"
        alt={title}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex justify-content-center mb-3">
          <div className="text-warning">
            {Array.from({ length: rating || 0 }, (_, i) => (
              <i key={i} className="bi bi-star-fill"></i>
            ))}
          </div>
        </div>
        <p style={styles.price}>
          {oldPrice && <span style={styles.oldPrice}>${oldPrice}</span>} ${price}
        </p>
        <button className="btn btn-outline-dark" onClick={handleCartToggle}>
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



