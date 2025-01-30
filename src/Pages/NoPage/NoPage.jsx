import './NoPage.css';
import { Link } from 'react-router-dom';
import NoPageImg from "../../Images/nopage.jpg";

function NoPage() {
    return (
        <div className="nopage">
            <div className="nopage-window">
                <h2 className="nopage-error">404!</h2>
                <img src={NoPageImg} alt="nopage" className="nopage-img" />
                <h3 className="nopage-title">Page not found!</h3>
                <button className="nopage-btn"><Link className="link" to="/">Return to home</Link></button>
            </div>
        </div>
    )
}

export default NoPage;