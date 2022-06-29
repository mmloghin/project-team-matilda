import React, { useState, useEffect } from 'react';

export default function CategoryFilter() {

    const handleChangeCategory = (event) => {
        let value = event.target.value;
        setBookGenre(value);
    };

    return (
        <div>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(value) => handleChangeCategory(value)}>
                <option selected>Search by genre</option>
                <option value="Detective">Detective</option>
                <option value="Animals">Animals</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Picture Books">Picture Books</option>
            </select>
        </div>
    );

};