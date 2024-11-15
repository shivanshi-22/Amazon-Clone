import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="header">
      <Link to ="/Home.js">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionline11">Hello Guest</span>
          <span className="header_optionline2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Returns</span>
          <span className="header_optionline2">& orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionline1">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket" >
            <ShoppingBasketIcon/>
            <span className="headeroptionlineonetwo header_basketCount">{basket?.length}</span>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
