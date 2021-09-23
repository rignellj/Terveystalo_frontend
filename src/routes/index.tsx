import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CheckPrimeRoute from './CheckPrimeRoute';
import SumRoute from './SumRoute';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/sum'>
				<SumRoute />
			</Route>
			<Route path='/checkprime'>
				<CheckPrimeRoute />
			</Route>
			<Route path='*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	);
};

export default Routes;
