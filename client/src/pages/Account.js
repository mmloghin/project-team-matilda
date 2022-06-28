import React from "react";
import BookPhoto from "../images/account.png";

export default function Account() {
    return (
        <div className="container flex justify-center m-20 text-center">
            <img className="mx-10 image h-10 mb-20" src={BookPhoto} alt="book" />
            Account
        </div>
    );
}