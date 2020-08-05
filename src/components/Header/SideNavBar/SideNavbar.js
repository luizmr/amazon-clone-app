import React from "react";
import { Link } from "react-router-dom";
import "./SideNavbar.css";
import { FaUserAlt, FaChevronRight } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import usa from "../../../assets/united-states-of-america-flag-icon-16.png";
import { useStateValue } from "../../Context/StateProvider";
import { auth } from "../../../firebase/firebase";

function SideNavbar() {
	const [{ basket, user }] = useStateValue();

	const login = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div id="window">
			<div id="mySidenav" className="sidenav">
				<div className="sidenav__main">
					<a
						// href="javascript:void(0)"
						className="closebtn"
						onClick={() => {
							document.getElementById("mySidenav").style.width =
								"0px";
							document
								.getElementById("window")
								.classList.remove("backdrop");
						}}
					>
						&times;
					</a>
					<Link
						href="#"
						className="sidenav__user"
						to={!user && "/login"}
					>
						<span>
							<FaUserAlt />
						</span>
						<span>
							Hello,{" "}
							{user
								? `${user?.email.substring(
										0,
										user?.email.lastIndexOf("@")
								  )}`
								: "Sign In"}
						</span>
					</Link>
				</div>
				<a href="#" className="sidenav__category">
					SHOP BY CATEGORY
				</a>
				<div className="sidenav__items">
					<a href="#">Amazon Music</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Echo & Alexa</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Fire Tablets</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Fire TV</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Kindle E-readers & Books</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Appstore for Android</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Subscribe & Save</a>
				</div>
				<div className="sidenav__items">
					<a href="#">Smart Home</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Amazon Physical Stores</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Gift Cards</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">#FoundItOnAmazon</a>
				</div>
				<div className="sidenav__items">
					<a href="#">Amazon Subscription Boxes</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Amazon Live</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">International Shopping</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Pet supplies</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Sports and Outdoors</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Baby</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Automotive</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Arts & Crafts</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Beauty and personal cara</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Computers</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Electronics</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Women's Fashion</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Men's Fashion</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Girl's Fashion</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Boy's Fashion</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Health and Household</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Home and Kitchen</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Industrial and Scientific</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Luggage</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Movies & Television</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Software</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Tools & Home Improvement</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Toys and Games</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Video Games</a>
					<span>
						<FaChevronRight />
					</span>
				</div>
				<div className="sidenav__items">
					<a href="#">Amazon Second Chance</a>
				</div>
				<div className="sidenav__items">
					<a href="#">Amazon Outlet</a>
				</div>
				<div className="sidenav__items">
					<a href="#">Full Store Directory</a>
				</div>
				<a
					href="#"
					className="sidenav__categoryTwo"
					style={{
						borderTop: "1px solid #bec2c2",
					}}
				>
					HELP & SETTINGS
				</a>
				<div className="sidenav__items">
					<a href="#">Your Account</a>
				</div>
				<div
					className="sidenav__items"
					style={{ justifyContent: "left" }}
				>
					<a href="#" style={{ marginTop: "4px" }}>
						<FiGlobe />{" "}
					</a>
					<p>English</p>
				</div>
				<div
					className="sidenav__items"
					style={{ justifyContent: "left" }}
				>
					<a href="#">
						<img
							src={usa}
							alt="usa"
							style={{ transform: "scale(1.2)" }}
						/>
					</a>

					<p>United States</p>
				</div>
				<div className="sidenav__items">
					<a href="#">Customer Service</a>
				</div>
				<div className="sidenav__items" onClick={login}>
					<a href="#">{user ? "Sign Out" : "Sign In"}</a>
				</div>
			</div>

			<span
				style={{ fontSize: "30px", cursor: "pointer" }}
				onClick={() => {
					document.getElementById("mySidenav").style.width = "350px";
					document.getElementById("window").classList.add("backdrop");
				}}
				className="menu"
			>
				&#9776;
			</span>
		</div>
	);
}

export default SideNavbar;
