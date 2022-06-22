import React from "react";
// import './App.css';
import { useStateValue } from "../components/StateProvider";
import Subtotal from "../components/Subtotal";
import ProductCart from '../components/ProductCart';

function Cart() {

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

export default Cart;