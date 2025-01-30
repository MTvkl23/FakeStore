import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './ProductCard.css';

function ProductCard(props){
    return (
        <div className="product-card">
            <div className="product-card-image"><img src={props.img} alt={props.title} /></div>
            <h5 className="product-card-title">{props.title}</h5>
            <div className="product-card-information">
                <div className="product-card-rating">
                    <FaStar className="product-card-rating-icon"/>
                    <span className="product-card-rating-value">{props.rating}</span>
                </div>
                <span className="product-card-price">{props.price}$</span>
            </div>
            <button className="product-card-btn"><Link className="link" to={`/product/${props.id}`}>Show Details</Link></button>
        </div>
    )
}

export default ProductCard;