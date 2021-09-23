import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CheckprimeRoute from './CheckprimeRoute';
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
				<CheckprimeRoute />
			</Route>
			<Route path='*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	);
};

export default Routes;
