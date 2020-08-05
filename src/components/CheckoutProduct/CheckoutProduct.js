import React from "react";
import { useStateValue } from "../Context/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} alt="product" className="checkoutProduct__image" />

			<div className="checkoutProduct__info">
				<div>
					<p className="checkoutProduct__title">{title}</p>
					<p className="checkoutProduct__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="checkoutProduct__rating">
						{Array(rating)
							.fill()
							.map((star) => (
								<p>⭐</p>
							))}
					</div>
				</div>

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
