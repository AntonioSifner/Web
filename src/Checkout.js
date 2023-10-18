import React from "react";
import "./Checkout.css"
import Subtotal from "./Subtotal";
import{useStateValue} from './StateProvider'
import Cart from "./Cart";

const Checkout = () =>{

    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">

            {
                basket.length == 0 ?(
            
                <div className="checkout__title">
                    <h2>Your shopping basket is empty.</h2>
                    <p>You have no elements in your basket. Buy one.</p>
                </div>
                ): (
                    <div>
                        <h2 className="shoppingbaskettitle">elements in the Shopping Basket</h2>
                        {
                            basket.map((element)=>(
                                <Cart 
                                    id={element.id}
                                    title={element.title}
                                    image={element.image}
                                    price={element.price}
                                    rating={element.rating}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                    <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout;