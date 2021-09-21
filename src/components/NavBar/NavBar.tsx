import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
	return (
		<div className={`${styles.navBar}`}>
			<NavLink
				to='/'
				exact
				activeClassName={styles.activeLink}
			>
				Home
			</NavLink>
			<NavLink
				to='/checkprime'
				activeClassName={styles.activeLink}
			>
				Check Prime Number
			</NavLink>
			<NavLink
				to='/sum'
				activeClassName={styles.activeLink}
			>
				Sum
			</NavLink>
		</div>
	);
};

export default NavBar;
