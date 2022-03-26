import React from 'react';
import Card from '../../UI/Card';
import styles from './MoreQuotesContainer.module.css';
import ReturnButton from './ReturnButton/ReturnButton';

function MoreQuotesContainer({ setShownMoreQuotes, moreQuotes, quote }) {
	return (
		<div className={styles['more-quotes-container']}>
			<h2>{quote.author}</h2>
			<ul className={styles['list-items']}>
				{moreQuotes &&
					moreQuotes.map((q) => {
						return (
							<Card key={q._id}>
								<li>{q.content}</li>
							</Card>
						);
					})}
			</ul>
			<ReturnButton setShownMoreQuotes={setShownMoreQuotes} />
		</div>
	);
}

export default MoreQuotesContainer;
