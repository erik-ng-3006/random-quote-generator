import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from './RandomButton.module.css';

function RandomButton({ setShownMoreQuotes }) {
	const onClickHandler = () => {
		setShownMoreQuotes(false);
	};
	return (
		<button className={styles.btn} onClick={onClickHandler}>
			random <AutorenewIcon className={styles.icon} />
		</button>
	);
}

export default RandomButton;
