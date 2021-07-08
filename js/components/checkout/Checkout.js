import React from "react";
import BasketCard from "../basket-thumbnail/BasketCard";

import TotalAmount from "../TotalAmount";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <div className="button-box">
        <Link className="btn-continue" to="/">
          Go back
        </Link>
      </div>

      <div className="basket-card-inner">
        <BasketCard />
      </div>

      <TotalAmount />
    </div>
  );
};

export default Checkout;
