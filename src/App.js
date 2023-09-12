import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./Header.css";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MtWEiSHuVjY9YeLMHtGFD7CC61xwN1lbie02JOFnFzEPeq9sqvdyvqTRXhCqrg8bpPZY6Xc2rG3psHP6FgFHj0t00lvnR0Odj"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route>
              {/* <Route exact path="/" element={<Header/>} /> */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/payment" element={<Elements stripe = {promise}><Payment /> </Elements>} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
