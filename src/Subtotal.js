import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

const Subtotal = () =>{

    const [{basket}, dispatch] = useStateValue();

    const getCartTotal = () =>
    basket?.reduce((amount, item)=> item.price + amount, 0);


    return(
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <p>
                        Subtotal({basket.length} items): <strong>{value}</strong>
                    </p>
                )
                }
                decimalScale={2}
                value={getCartTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;