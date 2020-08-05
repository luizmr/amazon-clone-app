import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components//Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import { useStateValue } from "./components/Context/StateProvider";

import "./App.css";
import { auth } from "./firebase/firebase";

function App() {
	const [{ basket }, dispatch] = useStateValue();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user is logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});

		return () => {
			// cleanup operations
			unsubscribe();
		};
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/checkout" component={Checkout} />
					<Route path="/login" component={Login} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
