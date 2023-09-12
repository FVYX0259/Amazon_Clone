import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {useNavigate} from 'react-router-dom';

function Subtotal() {
  const [{basket}] = useStateValue();
  const history = useNavigate();

  const abse = (basket) => {
    let ans = 0;
    for(let i = 0;i < basket?.length;i++){
      ans = ans + basket[i].price;
    }
    return ans;
  }
  return (
    <div className = "subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={abse(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
