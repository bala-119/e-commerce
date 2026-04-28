function ProductCard({item,addToCart})
{
    return (
        <div className="card">
            <h2>{item.name}</h2>
            <p>₹ {item.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard;