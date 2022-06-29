import React from "react";
import {useStateValue} from './StateProvider';
import '../App.css';


function ProductCart({id,title,image,price,qty}) {
    
    const [{basket}, dispatch] = useStateValue();

    function increaseItem(){
        dispatch({
            type: 'INCREASE',
            id: id
        })
      }
      function decreaseItem(){
        dispatch({
            type: 'DECREASE',
            id: id
        })
      }

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }


    return(
        <div className="productcart">
            <img className="productcart__image" src={image} alt="cart image"/>
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">${price}</p>
                <p>
                <button onClick={decreaseItem}>-</button>{qty}<button onClick={increaseItem}>+</button>
        
                </p>
            <button onClick={removeItem}>Remove Item</button>
            </div>
        </div>
    )
}

export default ProductCart;