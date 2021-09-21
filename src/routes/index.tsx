import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Checkprime from '../pages/Checkprime/Checkprime';
import Home from '../pages/Home/Home';
import Sum from '../pages/Sum/Sum';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/sum'>
				<Sum />
			</Route>
			<Route path='/checkprime'>
				<Checkprime />
			</Route>
			<Route path='*'>
				<Redirect to='/' />
			</Route>
		</Switch>
	);
};

export default Routes;