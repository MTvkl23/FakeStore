import './Product.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import { increment } from '../../store';

function Product() {
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    let id = useParams().id;

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    console.log(res)
                    setProduct(res.data);
                }
            })
            .catch(err => {
                if (err.status >= 200 && err.status < 300) {
                    setProduct(err.data);
                }
            })
    }, [id]);

    const addProduct = () => {
        const products = (localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];
        let flag = true;
        products.forEach(element => {
            if (element.id === product.id) {
                element.count++;
                flag = false;
            }
        });
        (flag) ? (products.push({ id: product.id, title: product.title, img: product.image, price: product.price, count: 1 })) : flag = true;
        localStorage.setItem("products", JSON.stringify(products));
        dispatch(increment());
    };

    return (
        <div className="product-page">
            <div className="container">
                <div className="product-address"><Link className="link" to="/products">Products</Link> &#62; <Link className="link" to={`/products/${product.category}`}>{product.category}</Link> &#62; {product.title}</div>
                <div className="product-content">
                    <div className="product-information">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <div>
                            <h4 className="product-price">{product.price}$</h4>
                            <button onClick={addProduct} className="product-add-btn"><Link className="link" to="#"><span className="product-add-btn-icon"><MdAddShoppingCart /></span>Add To Cart</Link></button>
                        </div>
                    </div>
                    <img className="product-img" src={product.image} alt={product.title} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;