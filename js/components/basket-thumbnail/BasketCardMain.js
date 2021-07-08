import React,{useContext} from 'react';
//card component
import BasketCard from '../basket-thumbnail/BasketCard'
import { Link } from 'react-router-dom';
//total amount
import TotalAmount from '../TotalAmount';
import CartContext from '../../context/CartContext';
//context 


const BasketCardMain = ()=>{
 
    const cart_context = useContext(CartContext);

    const {cartProducts } = cart_context;
    return(

        <div className="basket-card">
            <h1>Basket</h1>
            <div className="basket-card-inner">
            <BasketCard/>
            </div>
           <TotalAmount/>

      
        {
             cartProducts.length >0 ? <Link className="btn-continue" to="/checkout">Continue</Link> : ''
        }  
        
        </div>
    )

}

export default BasketCardMain;