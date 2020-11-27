import React from 'react';
import './Product.css';

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p> The lean startup:</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<div className="product__rating">
					<p>⭐</p>
				</div>
			</div>
			<img 
				src="https://gornapolkatvn.files.wordpress.com/2013/03/metoda-lean-startup.jpg"
				alt="" 
			/>

			<button>Add Basket</button>
		</div>
	)
}

export default Product;