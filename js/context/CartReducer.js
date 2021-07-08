import React from "react";
import { ADD_TO_CART, TOTAL_AMOUNT, REMOVE_FROM_CART } from "./Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:


      state.products = state.products.filter((one)=>{
        if(one.id == action.payload.id){
            one.quantity = one.quantity - 1
        }

        return one;
    })
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload.data],
      
      };

    case TOTAL_AMOUNT:
      let amount = 0;
      state.cartProducts.map((each) => {
        return (amount = amount + each.price);
      });

      return {
        ...state,
        totalAmount: amount,
      };

    case REMOVE_FROM_CART:

    
      state.products = state.products.filter((one)=>{
        if(one.id == action.payload){
            one.quantity = one.quantity + 1
        }

        return one;
    })
      console.log(action.payload)
      return {
        ...state,
        cartProducts: state.cartProducts.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
