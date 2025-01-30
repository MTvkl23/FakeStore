import './Products.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { TiMediaPlay } from "react-icons/ti";
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setProducts(res.data);
                }
            })
            .catch(err => {
                if (err.status >= 200 && err.status < 300) {
                    setProducts(err.data);
                }
            })
    }, []);

    return (
        <div className="products-page">
            <section className="products">
                <h2 className="products-title">Our Products</h2>
                <div className="container">
                    <div className="products-wrapper">
                        {products.map((item) => (<div className="product-cards-item"><ProductCard key={item.id} id={item.id} category={item.category} img={item.image} title={item.title} price={item.price} rating={item.rating.rate} /></div>))}
                    </div>
                    <div className="categories-list">
                        <h4 className="categories-list-title">Categories</h4>
                        <ul>
                            <li className="categories-list-item"><Link className="link" to="/products/women's clothing"><span className="categories-list-item-icon"><TiMediaPlay /></span>Women's Clothing</Link></li>
                            <li className="categories-list-item"><Link className="link" to="/products/men's clothing"><span className="categories-list-item-icon"><TiMediaPlay /></span>Men's Clothing</Link></li>
                            <li className="categories-list-item"><Link className="link" to="/products/jewelery"><span className="categories-list-item-icon"><TiMediaPlay /></span>Jewelery</Link></li>
                            <li className="categories-list-item"><Link className="link" to="/products/electronics"><span className="categories-list-item-icon"><TiMediaPlay /></span>Electronics</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Products;