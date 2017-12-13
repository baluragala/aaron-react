import React, {Component} from 'react'
import {Link, NavLink} from "react-router-dom";

function Header(props) {
    return (<header>
        <h1>Super Store</h1>
        <nav>
            <ul>
                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/counter" activeClassName="active">Counter</NavLink></li>
            </ul>
        </nav>
    </header>)
}

export default Header;
