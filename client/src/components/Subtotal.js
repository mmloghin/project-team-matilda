import React from "react";
import CurrencyFormat from 'react-currency-format';
import '../App.css';
import { useStateValue } from "./StateProvider";

function Subtotal(){
 
    const getCartTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);

    const [{basket}, dispatch] = useStateValue();   


    return(<div className="subtotal">

        <CurrencyFormat
          renderText={(value => (
            <p>
                Subtotal({basket.length} items) : <strong>{`${value}`}</strong>
            </p>
            )
          )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandandSeparator={true}
        prefix={"$"}
        />
    <button>Go to Checkout</button>
</div>
    )
}

export default Subtotal;
