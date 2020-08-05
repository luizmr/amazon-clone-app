import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner from "../../../assets/banner.jpg";
import Beauty from "../../../assets/amazonbeauty.jpg";
import Computers from "../../../assets/amazoncomputers.jpg";
import House from "../../../assets/amazonhouse.jpg";
import Ship from "../../../assets/amazonship.jpg";
import Sports from "../../../assets/amazonsports.jpg";
import Toys from "../../../assets/amazontoys.jpg";
import "./Slider.css";

const slideImages = [Banner, Beauty, Computers, House, Ship, Sports, Toys];

const Slideshow = () => {
	return (
		<div
			className="slide-container"
			style={{ zIndex: "-1", marginBottom: "-200px" }}
		>
			<Slide>
				<div className="slider__image">
					<div>
						<img src={slideImages[0]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[1]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[2]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[3]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[4]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[5]} className="slider__image" />
					</div>
				</div>
				<div>
					<div>
						<img src={slideImages[6]} className="slider__image" />
					</div>
				</div>
			</Slide>
		</div>
	);
};

export default Slideshow;
