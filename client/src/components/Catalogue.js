import React, { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import '../App.css';

export default function Catalogue(props) {

    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setSearch(event.target.value);
        console.log(search);
    };

    return (

        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className="search__container">

                <form>
                    <div class="mb-6 mr-6px flex justify-center">
                        <div className="place-items-center pr-4">
                            <MdManageSearch size="2.5rem"/>
                        </div>
                            <input type="search" value={search} class="bg-gray-50 ml-6px border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type in a book title, author or genre" onChange={handleChange}/>
                    </div>                
                </form>

            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {props.books.filter((book) => (book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.genre.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase()))).map((book) => (
                        <div key={book.id} className="group relative">
                            <Product book={book} />
                        </div>
                    ))}
            </div>

        </div>

    );

};