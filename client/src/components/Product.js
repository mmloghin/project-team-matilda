import React from "react";
import '../App.css';
import { useStateValue } from "./StateProvider";


function Product({book}) {

    const [basket, dispatch] = useStateValue();

    const addToBasket = (book) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: book.id,
                title: book.title,
                image: book.image,
                price: book.price,
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
            <button  onClick={() => addToBasket(book)}>Add to Cart</button>
        </div>
    )
}

export default Product;