import React, { Component } from "react";
import Header from "../Header/Header";
import BannerMain from "../BannerMain/BannerMain";

export default class Home extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "rgb(234,237,237)" }}>
				<Header />
				<BannerMain />
			</div>
		);
	}
}
