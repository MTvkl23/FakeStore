import './Cart.css';
import { useEffect, useState } from 'react';
import { LuShoppingBasket } from "react-icons/lu";
import { BsCreditCard2Back } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { decrement, reset } from '../../store';

function Cart() {
    const [inCart, setInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const username = useSelector((state) => state.username);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const products = (localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];
        setInCart(products);
        
    }, [])

    useEffect(() => {
        inCart.forEach(element => {
            let total = 0;
            inCart.forEach(element => {
                total += element.price * element.count;
            });

            setTotalPrice(total);
        })
        localStorage.setItem("products", JSON.stringify(inCart));
    }, [inCart]);

    const onPayClick = () => {
        if (!inCart.length) {
            alert("The shopping cart is empty!");
        }
        else {
            if (username) {
                alert("Successfully paid!");
                localStorage.clear();
                setInCart([]);
                setTotalPrice(0);
                dispatch(reset());
            }
            else {
                navigate("/login");
            }
        }
    }

    const onRemoveClick = (id) => {
        setInCart(prevCart => prevCart.map(item => 
            item.id === id 
                ? item.count > 1 
                    ? { ...item, count: item.count - 1 }
                    : null
                : item
        ).filter(Boolean));
        dispatch(decrement());
    };    

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-title"><span className="cart-title-icon"><LuShoppingBasket /></span><span>Cart</span></div>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th className="cart-table-head" id="product">Product</th>
                            <th className="cart-table-head" id="title">Title</th>
                            <th className="cart-table-head" id="count">Count</th>
                            <th className="cart-table-head" id="price">Price</th>
                            <th style={{ width: "10%" }}></th>
                        </tr>
                    </thead>
                    <tbody style={{ display: (inCart.length) ? "flex" : "none" }}>
                        {inCart.map((product, index) => (
                            <tr>
                                <th className="cart-table-data" id="product">{index + 1}</th>
                                <td className="cart-table-data" id="title">{product.title}</td>
                                <td className="cart-table-data" id="count">{product.count}</td>
                                <td className="cart-table-data" id="price">{product.price}</td>
                                <td className="cart-table-data-remove"><button onClick={() => onRemoveClick(product.id)}><RiDeleteBinLine /></button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className="cart-total-price-title">Total Price</th>
                            <td className="cart-total-price-value" style={{ display: (inCart.length) ? "block" : "none" }}>{Number(totalPrice.toFixed(2))}$</td>
                            <td><button onClick={onPayClick} className="cart-pay-btn"><span className="cart-pay-icon"><BsCreditCard2Back /></span><span>Pay now</span></button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;