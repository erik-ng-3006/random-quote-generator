import React from 'react';
import styles from './ReturnButton.module.css';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

const ReturnButton = ({ setShownMoreQuotes }) => {
	const onClickHandler = () => {
		setShownMoreQuotes(false);
	};
	return (
		<button className={styles.btn} onClick={onClickHandler}>
			<span>Back</span>
			<SubdirectoryArrowLeftIcon className={styles.icon} />
		</button>
	);
};

export default ReturnButton;
