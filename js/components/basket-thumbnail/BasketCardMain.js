import React,{useContext} from 'react';
//card component
import BasketCard from '../basket-thumbnail/BasketCard'
import { Link } from 'react-router-dom';
//total amount
import TotalAmount from '../TotalAmount';

const BasketCardMain = ()=>{
 
    return(

        <div className="basket-card">
            <h1>Basket</h1>
            <div className="basket-card-inner">
            <BasketCard/>
            </div>
           <TotalAmount/>

      
            <Link className="btn-continue" to="/checkout">Continue</Link>
        
        </div>
    )

}

export default BasketCardMain;