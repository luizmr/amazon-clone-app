import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/amazon_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../Context/StateProvider";
import { auth } from "../../firebase/firebase";
import SideNavbar from "./SideNavBar/SideNavbar";

function Header() {
	const [{ basket, user }] = useStateValue();

	const login = () => {
		if (user) {
			auth.signOut();
		}
	};

	// const name = user?.email.substring(0, user?.email.lastIndexOf("@"));

	return (
		<nav className="header">
			<SideNavbar />
			<Link to="/">
				<img src={logo} alt="logo" className="header__logo" />
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link className="header__link" to={!user && "/login"}>
					<div className="header__option" onClick={login}>
						<span className="header__optionLineOne">
							Hello
							{user
								? `, ${user?.email.substring(
										0,
										user?.email.lastIndexOf("@")
								  )}`
								: ""}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link className="header__link" to="/">
					<div className="header__option header__optionTwo">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link className="header__link" to="/">
					<div className="header__option header__optionThree">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link className="header__link" to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
