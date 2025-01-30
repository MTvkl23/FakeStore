import './Home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TiMediaPlay } from "react-icons/ti";
import { TbShirt } from "react-icons/tb";
import { TbHanger } from "react-icons/tb";
import { MdOutlineDiamond } from "react-icons/md";
import { TbHeadphones } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import axios from 'axios';
import MainImg from '../../Images/model-transparent.png';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Slideshow from '../../Components/Slideshow/Slideshow';
import Footer from '../../Components/Footer/Footer';
import Image1 from '../../Images/1.jpg';
import Image2 from '../../Images/2.jpg';
import Image3 from '../../Images/3.jpg';
import Image4 from '../../Images/4.jpg';

function Home() {
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    setNewProducts(res.data.slice(-4));
                }
            })
            .catch(err => {
                if (err.status >= 200 && err.status < 300) {
                    setNewProducts(err.data.slice(-4));
                }
            })
    }, []);

    return (
        <>
            <main className="main">
                <div className="container">
                    <section className="main-wrapper">
                        <div className="main-content">
                            <div className="main-title">
                                <h2>New</h2>
                                <h2>Arrival</h2>
                            </div>
                            <p className="main-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus voluptate aspernatur impedit incidunt error repellat fugit, iure illo voluptatem ut placeat maxime magni debitis quas natus totam, repellendus quam reprehenderit ducimus cumque inventore nam sapiente! Similique molestiae illo voluptas!</p>
                            <button className="main-btn"><Link className="link" to="/products">Shop Now<TiMediaPlay className='main-btn-icon' /></Link></button>
                        </div>
                        <img src={MainImg} alt="fashion" className="main-img" />
                    </section>
                    <section className="category-cards">
                        <ul>
                            <li><Link className='link' to="/products/men's clothing"><CategoryCard icon={<TbShirt />} title="Men's Clothing" /></Link></li>
                            <li><Link className='link' to="/products/women's clothing"><CategoryCard icon={<TbHanger />} title="Women's Clothing" /></Link></li>
                            <li><Link className='link' to="/products/jewelery"><CategoryCard icon={<MdOutlineDiamond />} title="Jewelery" /></Link></li>
                            <li><Link className='link' to="/products/electronics"><CategoryCard icon={<TbHeadphones />} title="Electronics" /></Link></li>
                        </ul>
                    </section>
                    <section className="new-products-wrapper">
                        <h3 className="new-product-title">New For You</h3>
                        <ul className="new-products">
                            {newProducts.map((item) => (<li className="new-product"><ProductCard key={item.id} id={item.id} category={item.category} img={item.image} title={item.title} price={item.price} rating={item.rating.rate} /></li>))}
                        </ul>
                    </section>
                    <section className="main-album">
                        <div className="album-item"><img src={Image1} alt="1" /></div>
                        <div className="album-row-wrapper">
                            <div className="album-item"><img src={Image2} alt="2" /></div>
                            <div className="album-column-wrapper">
                                <div className="album-item"><img src={Image3} alt="3" /></div>
                                <div className="album-item"><img src={Image4} alt="4" /></div>
                            </div>
                        </div>
                    </section>
                    <section className="social-media">
                        <div className="social-media-content">
                            <h3 className="social-media-title">Follow Instagram</h3>
                            <div className="social-media-id">
                                <span className="social-media-id-icon"><FaInstagram /></span>
                                <span className="social-media-id-value">fake_shop</span>
                            </div>
                            <p className="social-media-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non autem sit consequuntur iure molestias voluptate deleniti cupiditate qui rerum sed?</p>
                            <button className="social-media-btn"><a href="https://example.com">Discover Now</a></button>
                        </div>
                        <div className="social-media-album">
                            <Slideshow />
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;