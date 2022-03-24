import React from 'react';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			created by{' '}
			<a
				href='https://github.com/erik-ng-3006'
				target='_blank'
				rel='noreferrer'
			>
				erik-ng
			</a>{' '}
			- devChallenges.io
		</footer>
	);
}

export default Footer;
