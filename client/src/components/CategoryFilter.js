import React, { useState, useEffect } from 'react';
import { FaBook } from 'react-icons/fa';

export default function CategoryFilter(props) {

    const handleChangeCategory = (event) => {
        let value = event.target.value;
        props.setBookGenreCB(value);
    };

    return (
        <div>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(value) => handleChangeCategory(value)}>
                <option value="All">Search by genre</option>
                <option value="Detective">Detective</option>
                <option value="Animals">Animals</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Picture Books">Picture Books</option>
            </select>
        </div>
    );

};