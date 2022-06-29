import React, { useState } from 'react'
import '../App.css';
import { useStateValue } from "./StateProvider";
import { MdShoppingCart } from "react-icons/md";


function Product({ book }) {

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
        <div className="mt-5 text-center">
            <img className="mb-5 hover:opacity-75" src={book.image} alt="cover" />
            <div className="title mb-5 font-semibold">"{book.title}"</div>
            <div className="mt-4">
                {book.price}$
                <button className="ml-10"
                    onClick={() => addToBasket(book)}>
                    <MdShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Product;