import React from 'react';
import Quote from './Quote/Quote';
import Author from './Author/Author';
import styles from './QuoteContainer.module.css';
function QuoteContainer({ quote, setShownMoreQuotes }) {
	return (
		<div className={styles['quote-container']}>
			<Quote quote={quote} />
			<Author quote={quote} setShownMoreQuotes={setShownMoreQuotes} />
		</div>
	);
}

export default QuoteContainer;
