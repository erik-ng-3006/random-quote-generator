import React from 'react';
import styles from './Author.module.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Author({ quote, setShownMoreQuotes, getMoreQuotes }) {
	const onClickHandler = () => {
		setShownMoreQuotes(true);
		getMoreQuotes();
	};
	return (
		<div className={styles.author} onClick={onClickHandler}>
			<div>
				{quote && <h2>{quote.author}</h2>}
				{quote && <p>{quote.tags}</p>}
			</div>
			<ArrowRightAltIcon className={styles.icon} />
		</div>
	);
}

export default Author;
