import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import ImageError from "../../assets/notfound.png";
import "./NotFound.css";

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="error">
					<Link to="/">
						<img src={ImageError} alt="imageerror" />
					</Link>
				</div>
			</div>
		);
	}
}
