import React from "react";
import './App.css';
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ProductCart from './ProductCart';

function Checkout() {

    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">

                {
                    basket?.length === 0 ? (
                        <div>
                        <h2 className="checkout__title"> Your shopping basket is empty</h2>
                        <p>Let's pick some books!</p>
                    </div>
                    ) : (
                        <div>
                            <h2 className="shopping__basket">Items in the Cart</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                                ))
                            }
                        
                        </div>
                    )
                }
               
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;