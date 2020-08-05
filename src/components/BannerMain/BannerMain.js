import React from "react";
import Product from "../Product/Product";
import banner from "../../assets/banner.jpg";
import "./BannerMain.css";
import leanStartup from "../../assets/leanstartup.jpg";
import Slideshow from "./Slider/Slider";

function BannerMain() {
	return (
		<div className="home">
			<Slideshow />

			<div className="home__row">
				<Product
					id="1"
					title="Nintendo Switch Pro Controler"
					price={57.95}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._SL1258_.jpg"
					}
				/>
				<Product
					id="2"
					title="Mario Kart 8 Deluxe - Nintendo Switch"
					price={48.89}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg"
					}
				/>
				<Product
					id="3"
					title="Nintendo Switch Lite - Turquoise"
					price={239.99}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71qmF0FHj7L._AC_SL1500_.jpg"
					}
				/>
				<Product
					id="4"
					title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
					price={329.0}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
					}
				/>
				<Product
					id="5"
					title="Razer Kraken X Ultralight Gaming Headset"
					price={49.99}
					rating={4}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/61QIMDB3YTL._AC_SL1500_.jpg"
					}
				/>
				<Product
					id="6"
					title="Marvel's Avengers for PlayStation 4 Pre-Sale"
					price={59.99}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SL1500_.jpg"
					}
				/>
				<Product
					id="7"
					title="The Last of Us Part II - PlayStation 4"
					price={59.99}
					rating={4}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71p8G%2BYeA6L._SL1500_.jpg"
					}
				/>
				<Product
					id="8"
					title="Acer Chromebook Spin 11 CP311-1H-C5PN Convertible Laptop, Celeron N3350, 11.6 HD Touch, 4GB DDR4, 32GB eMMC"
					price={309.99}
					rating={4}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71c6BO65hAL._AC_SL1500_.jpg"
					}
				/>
				<Product
					id="9"
					title="Logitech C920 Hd Pro Webcam (Black) Black"
					price={157.99}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg"
					}
				/>
			</div>
		</div>
	);
}

export default BannerMain;
