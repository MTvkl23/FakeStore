import './Navbar.css';
import { Outlet, Link } from 'react-router-dom';
import { TiArrowSortedDown, TiShoppingCart } from "react-icons/ti";
import { CgEnter } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../../store';

function Navbar() {
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <h1 className="header-logo"><Link className="link" to="/">LOGO</Link></h1>
                        <ul className="nav">
                            <li className="nav-item"><Link className="link" to="/">Home</Link></li>
                            <li className="nav-item" onMouseEnter={() => { setDropdownVisibility(true) }} onMouseLeave={() => { setDropdownVisibility(false) }}><Link className="link" to="/products">Products<span className="nav-item-icon"><TiArrowSortedDown /></span></Link>
                                <div className="categories-dropdown" onMouseEnter={() => { setDropdownVisibility(true) }} style={{ display: (dropdownVisibility) ? "block" : "none" }}>
                                    <ul>
                                        <li className="categories-dropdown-item"><Link className="link" to="/products/men's clothing">Men's Clothing</Link></li>
                                        <li className="categories-dropdown-item"><Link className="link" to="/products/women's clothing">Women's Clothing</Link></li>
                                        <li className="categories-dropdown-item"><Link className="link" to="/products/jewelery">Jewelery</Link></li>
                                        <li className="categories-dropdown-item"><Link className="link" to="/products/electronics">Electronics</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item"><Link onClick={() => { dispatch(setUsername("")) }} className="link" to={(username) ? "#" : "/login"}><span className="nav-item-icon">{(username) ? <CgLogOut /> : <CgEnter />}</span>{(username) ? "Log Out" : "Login"}</Link></li>
                            <li className="nav-item"><Link className="link" to="/cart"><span className="nav-item-icon"><TiShoppingCart /></span>Cart<span className="cart-products-counter" style={{ display: (counter) ? "block" : "none" }}>{(counter > 99) ? "XD" : counter}</span></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Navbar;