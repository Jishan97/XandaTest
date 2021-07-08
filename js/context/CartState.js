import React, { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import game1 from '../../assets/game1.jpg'
import game2 from '../../assets/game2.jpg'
import game3 from '../../assets/game3.jpg'
import game4 from '../../assets/game4.jpg'



//Types
import {
    ADD_TO_CART, TOTAL_AMOUNT, REMOVE_FROM_CART
    } from './Types'


const CartState = props =>{

    const globalState = {
        products:[{
            id:1,
            title:"Star Wars: Battlefront",
            description:'Immerse Yourself in the Ultimate Star Wars Expereince',
            price:300,
            image:game1,
            quantity:1
        },
        {
            id:2,
            title:"Dying Light",
            description:'Dying light is the open world first person survival horror action-adventure video game developed by Techland',
            price:500,
            image:game2,
            quantity:1

        },
        {
            id:3,
            title:"Bloodborne",
            description:'Bloodbrone is an aciton role playing video game developed from Software',
            price:9999,
            image:game3,
            quantity:1

        },
        {
            id:4,
            title:"Evolve",
            description:'Evolve is a first person shooter video game developed by Turtle Rock Solution',
            price:150,
            image:game4,
            quantity:1
        }
        
    ],
    cartProducts:[],
    totalAmount:0
    }

    const [state, dispatch] = useReducer(CartReducer, globalState);


    const get_total_amount = ()=>{
        dispatch({
            type:TOTAL_AMOUNT
        })           
    
    }

    const add_To_Cart = (id)=>{

        const data = globalState.products.find((one)=>{
            return one.id == id && one.quantity > 0
        })

        console.log(data)

        dispatch({
            type:ADD_TO_CART,
            payload:{data,id}
        })
        get_total_amount();

    }


    const remove_from_cart = (id)=>{

        console.log("id", id)
        dispatch({
            type:REMOVE_FROM_CART,
            payload:id
        })
        get_total_amount()
    }
    


    return <CartContext.Provider value={{
        products:state.products,
        cartProducts:state.cartProducts,
        totalAmount:state.totalAmount,
        //add to cart
        add_To_Cart,
        get_total_amount,
        remove_from_cart
        
        
    }}>

        {props.children}

        </CartContext.Provider>


}

export default CartState;