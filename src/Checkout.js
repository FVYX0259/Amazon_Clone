import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckProduct from "./CheckProduct";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket ,user}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <div className="check__items"></div>
          <div>
            {basket.map((title) => {
              return (
                <CheckProduct
                  id={title.id}
                  title={title.title}
                  price={title.price}
                  image={title.image}
                  rating={title.rating}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
