import React from "react";
import { useStateValue } from './StateProvider';
import '../App.css';

function ProductCart({ id, title, image, price }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }


    return (
        <div className="productcart">
            <img className="productcart__image" src={image} alt="cart" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">${price}</p>
                <button onClick={removeItem}>Remove Item</button>
            </div>
        </div>
    )
}

export default ProductCart;