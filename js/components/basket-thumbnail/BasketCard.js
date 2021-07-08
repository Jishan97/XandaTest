import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
//game image
import game from "../../../assets/game1.jpg";
import coin from "../../../assets/coins.png";
import bin from "../../../assets/bin.png";

const BasketCard = () => {
  const cart_context = useContext(CartContext);

  const { cartProducts, totalAmount, remove_from_cart } = cart_context;

  const removeFromCart = (id) => {
    remove_from_cart(id);
  };

  return cartProducts.map((each) => {
    return (
      <div className="inner-card">
        <div style={{ display: "flex", justifyContent: "start" }}>
          <img src={each.image} height="60" alt="" />

          <div className="inner-card-details">
            <p>{each.title}</p>
            <p>
              {" "}
              <span>
                {" "}
                <img src={coin} height="15" alt="" />{" "}
              </span>{" "}
              <b> {each.price}</b>
            </p>
          </div>
        </div>

        <p className="binClass" onClick={() => removeFromCart(each.id)}>
          {" "}
          <span>
            {" "}
            <img src={bin} height="20" alt="" />{" "}
          </span>
        </p>
      </div>
    );
  });
};

export default BasketCard;
