import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state';

const MenuItem = (props) => {
  const {item} = props;

  const {name, description, price, imageUrl} = item;
  const dispatch = useDispatch()
  const existingItem = useSelector(state => state.items.find(i => i.name === item.name));
  const handleAddToCart = () => {
        if(existingItem){
            dispatch(actionCreators.updateitem(existingItem));
    
        }else{
          dispatch(actionCreators.additem(item));
        }
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
          <button className="btn btn-success" onClick={() => handleAddToCart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
