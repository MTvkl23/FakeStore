import './Category.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';

function Category() {
    const [products, setProducts] = useState([]);
    let category = useParams().category;
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
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
    }, [category]);

    return (
        <div className="category-page">
            <section className="products-incategory">
                <h2 className="products-title">{category}</h2>
                <div className="container">
                    <div className="products-incategory-wrapper">
                        {products.map((item) => (<div className="product-incategory-cards-item"><ProductCard key={item.id} id={item.id} category={item.category} img={item.image} title={item.title} price={item.price} rating={item.rating.rate} /></div>))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Category;