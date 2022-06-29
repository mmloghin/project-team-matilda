import React from "react";
import '../App.css';
import { useStateValue } from "../components/StateProvider";
import Subtotal from "../components/Subtotal";
import ProductCart from '../components/ProductCart';


function Cart({qty}) {

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
                            <h2 className="shopping__basket">Items in Cart</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    qty={item.qty}
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
                        <Subtotal/>
                    </div>
                )
            }
            
        </div>
    )
}

export default Cart;