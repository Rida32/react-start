import React from 'react'

const Product = ({img , tag , title , price}) => {
  return (
    <div className="col-md-4 mb-4">
    <div className="product-card">
        <img src={img} alt="Product 1" className="img-fluid"/>
        <div className="label">{tag}</div>
        <input type="checkbox" id="wishlist1" className="wishlist-checkbox"/>
        <label for="wishlist1" className="wishlist-icon fas fa-heart"></label>
        <div className="product-details">
            <h5>{title}</h5>
            <p className="product-price">${price}</p>
        </div>
    </div>
</div>
  )
}

export default Product