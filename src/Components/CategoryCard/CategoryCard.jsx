import './CategoryCard.css';

function CategoryCard(props){
    return (
        <div className="category-card">
            <span className="category-card-icon">{props.icon}</span>
            <h4 className="category-card-title">{props.title}</h4>
        </div>
    )
}

export default CategoryCard;