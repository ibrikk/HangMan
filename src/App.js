import React from 'react';
import HomePage from './components/HomePage.jsx';
import HangmanMarvel from './components/hangmanMarvel';
import HangmanDc from './components/hangmanDc';
import { Switch, Route } from 'react-router-dom';

const App = () => {
	return(
		<div>
		<HomePage />
			<Switch>
				<Route exact path='/' compoent={HomePage} />
				<Route path='/marvel' component={HangmanMarvel} />
				<Route path='/dc' component={HangmanDc} />
			</Switch>
		</div>
	);
}

export default App;