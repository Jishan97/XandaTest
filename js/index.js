import React from 'react';
import ReactDOM from 'react-dom';
//Navbar
import Navbar from './components/Navbar'
//Header
import Header from './components/Header'


//Checkout 
import Checkout from './components/checkout/Checkout'


//Home
import Home from './components/home/Home'

//Global state

import CartState from './context/CartState'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

const app = document.getElementById('app');



ReactDOM.render((
	<div className="container">
		<Router>
		<CartState>

		<Navbar/>
		<Header/>	


		<Switch>
          <Route exact path="/">
		  <Home/>
          </Route>

		  <Route exact path="/checkout">
		  <Checkout/>
          </Route>

        </Switch>

	



		</CartState>

		</Router>


	</div>
), app);