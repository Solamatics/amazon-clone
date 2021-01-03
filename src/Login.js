import React, { useState } from 'react';
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = e => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then(auth => {
				history.push('/')
			})
			.catch(error => alert(error.message))
	}

	const register = e => {
		e.preventDefault();

		// User Registration aunthentication here
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				// Handle successful creation of new user with and password
				console.log(auth);
				// Redirects user to homepage if authentication is true
				if(auth) {
					history.push('/')
				}
			})
			.catch(error => alert(error.message))
	}


	return (
		<div className="login">
			<Link to="/">
				<img 
					className="login__logo"
					src="https://www.ampercent.com/wp/wp-content/uploads/Amazon-Logo.png"
					alt="" 
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>

				<form>
					<h5>E-mail</h5>
						<input type="text" 
						value={email} 
						onChange={e => setEmail(e.target.value)} 
					/>

					<h5>Password</h5>
					<input type="password" 
						value={password} value={password} 
						onChange={e => setPassword(e.target.value)}  
					/>

					<button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

					<p>
						By Signing-in you agree to AMAZON FAKE CLONE Conditions
						of Use & Sale. Please see our Privacy Notice, 
						out Cookies Notice and our Interest-Based Ads Notice.
					</p>

					<button type="submit" onClick={register} className="login__registerButton">
						Create your Amamzon Account
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login