import './ProductCard.css';

const ProductCard = (props) => {
    console.log(props);
    return (
        <div className='productCard'>
            <div className='cardImage'><img src={props.image}></img></div>
            <div className="cardContent">
                <div className='line1'><div className='productTitle'>{props.title}</div></div>
                <div className='line2'>
                    <div className='productCategory'>{props.category}</div>
                    <div className='productPrice'>${props.price}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;