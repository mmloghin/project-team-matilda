import React from "react";
import Emoji from "../assets/emoji.png";

export default function Account() {
    return (
        <div className="container flex flex-col items-center justify-center m-20 text-center">
            <h1 className="font-semibold text-2xl mb-5">
                Account Page
            </h1>
            <p>Work in progress...</p>
            <img className="mt-10 h-12 w-12" src={Emoji} alt="emoji" />
        </div>
    );
}