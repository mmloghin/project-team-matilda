import React from "react";
import '../App.css';
import { useStateValue } from '../StateProvider'
import { MdAddShoppingCart } from "react-icons/md";

function Product(id, title, image, price, rating) {

    const [basket, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                // rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{book.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{book.price}</strong>
                </p>
            </div>
            <img src={book.image} alt="harry potter" />
            <button  onClick={() => addToBasket(book)}><MdAddShoppingCart /></button>
        </div>
    )
}

export default Product;