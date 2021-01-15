import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51I75o4DfoPgyFqgKzCmQc88yxmxBbYT5EHY7PN5Dhnho2xLwJvhh4ZYv6QYBedBdSu9qf0JqPne8g4daccaj2Hqh00LErIfUhS');

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
  		// Runs once when the app component runs
  		auth.onAuthStateChanged(authUser => {
  			console.log('THE USER IS >>> ', authUser);

  			if(authUser) {
  				// The user just logged in / the user was logged in
  				dispatch({
  					type: 'SET_USER',
  					user: authUser
  				})
  			} else {
  				// the user is logged out
  				dispatch({
  					type: "SET_USER",
  					user: null
  				})
  			}
  		})
  	}, [])

  return (

  	<Router>
	    <div className="app">
	    	{/*Switch and Router to different pages*/}
	    	<Switch>
	    		<Route path="/login">
	    			<Login />
	    		</Route>
		    	<Route path="/checkout">
		    		<Header />
		    		<Checkout />
		    	</Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
		    	<Route path="/">
		    		<Header />
		    		<Home />
		    	</Route>
	    	</Switch>
	    </div>
   	</Router>
  );
}

export default App;
