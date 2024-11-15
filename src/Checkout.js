import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/70ff69b21d766781.jpg?q=20"
        ></img>

        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
            </h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
