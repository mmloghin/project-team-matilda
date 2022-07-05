import React, { useState } from 'react'
import '../App.css';
import { useStateValue } from "./StateProvider";
import { MdShoppingCart } from "react-icons/md";


function Product({ book }) {


    const [basket, dispatch] = useStateValue();

   const [disable, setDisable] = React.useState(false);


    const addToBasket = (book) => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: book.id,
                title: book.title,
                image: book.image,
                price: book.price,
                qty: 0,
            }
        })
    }

    return (

        <div className="mt-5 items-center">
            <div className="w-full min-h-90 bg-gray-300 aspect-w-1 aspect-h-2 rounded-md overflow-hidden drop-shadow-md group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img 
                    className="object-scale-down scale-90 object-center object-cover lg:w-full lg:h-full"
                    src={book.image}
                    alt="cover" 
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="mb-2 mt-1 font-semibold text-lg text-indigo-600">{book.title}</p>
                    <p className="mb-1">By {book.author}</p>
                    <p className="mb-1">${book.price}</p>
                </div>
            <div className="mb-2 mt-2 ml-2 justify-right">
                <button disabled={disable}
                    onClick={() => { addToBasket(book); setDisable(true);}}>
                    <MdShoppingCart />
                </button>
                
            </div>
            </div>
        </div>
    )
}

export default Product;