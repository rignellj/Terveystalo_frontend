import React from 'react';

import styles from './Home.module.css';

const Home: React.FC = () => {
	return (
		<h2 className={styles.header}>
			Welcome to my prime numbers app!
		</h2>
	);
};

export default Home;
