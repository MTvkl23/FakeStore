import './Footer.css';
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper"> 
                    <div className="footer-content">
                        <div className="footer-content-title">
                            <h2>Fake</h2>
                            <h2>Store</h2>
                        </div>
                        <p className="footer-content-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, adipisci reiciendis? Quibusdam, nam? Quam, voluptatem ipsa.</p>
                    </div>
                    <div className="footer-products">
                        <h4 className="footer-list-title">Products</h4>
                        <ul>
                            <li className="footer-product"><Link className="link" to="/products/women's clothing">✓ Women's Clothing</Link></li>
                            <li className="footer-product"><Link className="link" to="/products/men's clothing">✓ Men's Clothing</Link></li>
                            <li className="footer-product"><Link className="link" to="/products/jewelery">✓ Jewelery</Link></li>
                            <li className="footer-product"><Link className="link" to="/products/electronics">✓ Electronics</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4 className="footer-list-title">Contact us</h4>
                        <ul>
                            <li className="footer-contact-item"><a href="https://example.com"><span className="footer-contact-item-icon"><FaInstagram /></span>fake_shop</a></li>
                            <li className="footer-contact-item"><a href="https://example.com"><span className="footer-contact-item-icon"><FaWhatsapp /></span>online.shop</a></li>
                            <li className="footer-contact-item"><a href="https://example.com"><span className="footer-contact-item-icon"><FaTelegram /></span>online.shop</a></li>
                            <li className="footer-contact-item"><a href="https://example.com"><span className="footer-contact-item-icon"><FaFacebook /></span>online.shop</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;