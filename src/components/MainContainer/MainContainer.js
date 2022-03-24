import React, { useState, useCallback, useEffect } from 'react';
import styles from './MainContainer.module.css';
import RandomButton from './RandomButton/RandomButton';
import QuoteContainer from './QuoteContainer/QuoteContainer';
import MoreQuotesContainer from './MoreQuotesContainer/MoreQuotesContainer';
import axios from 'axios';

function MainContainer() {
	const [shownMoreQuotes, setShownMoreQuotes] = useState(false);
	const [quotes, setQuotes] = useState('');

	const fetchData = useCallback(() => {
		axios
			.get('https://quote-garden.herokuapp.com/api/v3/quotes')
			.then(function (response) {
				// handle success
				console.log(response.data.data);
				setQuotes(response.data.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<main role='main' className={styles.main}>
			<RandomButton
				setQuotes={setQuotes}
				setShownMoreQuotes={setShownMoreQuotes}
			/>
			{shownMoreQuotes ? (
				<MoreQuotesContainer setShownMoreQuotes={setShownMoreQuotes} />
			) : (
				<QuoteContainer
					quotes={quotes}
					setShownMoreQuotes={setShownMoreQuotes}
				/>
			)}
		</main>
	);
}

export default MainContainer;
