import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/blacklogo.png";
import "./Login.css";
import { auth } from "../../firebase/firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
		// login
		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	const register = (e) => {
		e.preventDefault();
		// register
		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img src={logo} alt="logo" className="login__logo" />
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login_signInButton"
						type="submit"
						onClick={login}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to Amazon's Conditions of Uses &
					Sale. Please sse our Privacy Notice, our Cookies Notice and
					our Interest-Based Ads Notice.
				</p>
				<button className="login_registerButton" onClick={register}>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
