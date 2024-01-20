import React from "react";
import './CheckProduct.css';
import { useStateValue } from './StateProvider';

function CheckProduct({ id, title, price, image, rating }) {
    const [{ basket },dispatch] = useStateValue();
    const removetoBasket = () => {
        dispatch({
            type: 'REMOVE_TO_BASKET',
            item: {
              id : id,
              title : title,
              image : image,
              price : price,
              rating : rating,
            },
        });
    };
  return (
    <div className="checkproduct">
        <div className="image__data">
        <img src={image} alt="" />
        </div>
        <div className="product__info">
          <strong><p>{title}</p></strong>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(() => {
                return <p>🌟</p>;
              })}
          </div>
        <button onClick={removetoBasket}>Remove From Basket</button>
        </div>
      </div>
  );
}

export default CheckProduct;
