import React, { Component } from "react";
import Header from "../Header/Header";

import "./Checkout.css";
import { useStateValue } from "../Context/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<>
			<Header />
			<div className="checkout">
				<div className="checkout__left">
					{/* <img className="checkout__ad" src={} alt="ad"/> */}
					{basket?.length === 0 ? (
						<div className="checkout__title">
							<h2>Your Shopping Basket is empty</h2>
							<p>
								You have no items in your basket. To buy one or
								more items, click "Add to basket" next to the
								item.
							</p>
						</div>
					) : (
						<div>
							<h2 className="checkout__title">
								Your Shopping Basket:{" "}
							</h2>
							{basket.map((item) => (
								<CheckoutProduct
									key={item.id}
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</div>
					)}
				</div>
				<div className="checkout__right">
					{basket.length > 0 && <Subtotal />}
				</div>
			</div>
		</>
	);
}

export default Checkout;
