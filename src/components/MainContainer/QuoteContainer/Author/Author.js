import React from 'react';
import styles from './Author.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Author({ quote, setShownMoreQuotes }) {
	const onClickHandler = () => {
		setShownMoreQuotes(true);
	};
	return (
		<div className={styles.author} onClick={onClickHandler}>
			<div>
				<h2>Bill Gates</h2>
				<p>business</p>
			</div>
			<ArrowRightAltIcon className={styles.icon} />
		</div>
	);
}

export default Author;
