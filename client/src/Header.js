import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { useStateValue } from "./StateProvider";

function Header () {

    const [{basket}, dispatch] = useStateValue();

    return(
        <nav className="header">
            <img className="header__logo" src={logo} alt="logo"/>
             <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Books</span>
                <span className="header__optionLineTwo">by Genre</span>
            </div>
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Wishlist</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
            </Link>
            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Account</span>
            </div>
            </Link>
            </div>
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBagIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;