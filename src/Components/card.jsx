import React from 'react';

const MenuItem = (props) => {
  let { name, description, price, imageUrl } = props;
  const handleAddToCart = (name, price) => {
    console.log(`Added ${name} to cart. Price: ${price}`);
  }
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={!imageUrl ? "https://placekitten.com/300/200" : imageUrl}
          className="card-img-top"
          alt="Menu Item"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>Price: ${price}</strong>
          </p>
          <button className="btn btn-success" onClick={() => handleAddToCart(name, price)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
