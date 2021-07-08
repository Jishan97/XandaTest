import React, { useContext, useEffect, useState } from "react";
import game from "../../../assets/game1.jpg";
//background
import controllerImage from '../../../assets/controller.png'
//coin image
import coin from '../../../assets/coins.png'

// import context
import CartContext from "../../context/CartContext";

const Card = () => {

  const [buttonState, setButtonState] = useState(false)


  const cart_context = useContext(CartContext);

  const { products, add_To_Cart, cartProducts } = cart_context;
  

  const addtocart = (one) => {
    
    console.log(one.quantity)
    if(one.quantity >0 ){
      console.log(one.quantity)

      add_To_Cart(one.id)
    }
  }



  return products.map((one) => {
    return (
      <div key={one.id} className={`card   show${one.id}`} style={{ backgroundImage: 'url(' + controllerImage + ')', opacity:`${one.quantity > 0? 1 : 0.4}`    }} >
        <div className="card-item-left">
          <img src={one.image} height="180" alt="" />
        </div>

        <div className="card-item-right">
          <h2>{one.title}</h2>
          <p>{one.description}</p>
          <p>  <span> <img src={coin} height="20" alt="" /> </span> <b> {one.price} Gil</b></p>
          <button  type="submit" disabled={one.quantity >0 ? false : true} className="btn-black" onClick={() => addtocart(one)}> Add to cart </button>
        </div>
        
      </div>
    );
  });



};

export default Card;
