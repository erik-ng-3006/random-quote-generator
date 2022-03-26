import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './RandomButton.module.css';

function RandomButton({ setShownMoreQuotes, updateQuote }) {
	const onClickHandler = () => {
		setShownMoreQuotes(false);
		updateQuote();
	};
	return (
		<button className={styles.btn} onClick={onClickHandler}>
			random <AutorenewIcon className={styles.icon} />
		</button>
	);
}

export default RandomButton;
