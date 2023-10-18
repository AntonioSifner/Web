import React from "react";
import "./Product.css"
import { useStateValue } from "./StateProvider";

const Product = ({id,title,image,price,rating}) =>{
    const [{basket}, dispatch] = useStateValue();
    
    console.log('basket content', basket);

    const addToBasket = () =>{
        dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                    <div className="product__rating">
                        {
                            Array(rating)
                            .fill()
                            .map((element) => (
                                <p>*</p>
                            ))
                        }
                    </div>
                    <img src={image} alt=""/>
                    <button onClick={addToBasket}>Add to Basket</button>
                </p>
            </div>
        </div>
    )
}

export default Product;