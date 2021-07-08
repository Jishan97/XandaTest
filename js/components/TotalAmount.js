import React,{useContext} from 'react';
import CartContext from '../context/CartContext';

const TotalAmount = ()=>{

    const cart_context = useContext(CartContext);

    const { totalAmount } = cart_context;
return(
    <div className="cartAmount">
    <p>  <b> {totalAmount ? "Total Amount" : "No items"} </b></p>
    <p> <b> {totalAmount} Gil </b></p>
    </div>
)

}

export default TotalAmount;