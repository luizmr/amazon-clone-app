import React from "react";
import "./Product.css";
import { useStateValue } from "../Context/StateProvider";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{/* build an array of the size of rating value and fill with empty values */}
					{Array(rating)
						.fill()
						.map((star) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="product" />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
