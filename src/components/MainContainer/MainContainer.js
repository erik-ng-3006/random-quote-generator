import React, { useState, useCallback, useEffect } from 'react';
import styles from './MainContainer.module.css';
import RandomButton from './RandomButton/RandomButton';
import QuoteContainer from './QuoteContainer/QuoteContainer';
import MoreQuotesContainer from './MoreQuotesContainer/MoreQuotesContainer';
import axios from 'axios';

function MainContainer() {
	const [shownMoreQuotes, setShownMoreQuotes] = useState(false);
	const [quote, setQuote] = useState(null);
	const [moreQuotes, setMoreQuotes] = useState(null);

	const updateQuote = useCallback(() => {
		axios
			.get('https://api.quotable.io/random')
			.then(function (response) {
				// handle success
				setQuote(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	useEffect(() => {
		updateQuote();
	}, [updateQuote]);

	const getMoreQuotes = useCallback(() => {
		if (quote) {
			axios
				.get(`https://quotable.io/quotes?author=${quote.author}`)
				.then(function (response) {
					// handle success
					setMoreQuotes(response.data.results);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				});
		}
	}, [quote]);

	let content;

	if (quote && shownMoreQuotes) {
		content = (
			<MoreQuotesContainer
				quote={quote}
				setShownMoreQuotes={setShownMoreQuotes}
				moreQuotes={moreQuotes}
			/>
		);
	} else if (quote && !shownMoreQuotes) {
		content = (
			<QuoteContainer
				getMoreQuotes={getMoreQuotes}
				quote={quote}
				setShownMoreQuotes={setShownMoreQuotes}
			/>
		);
	}

	return (
		<main role='main' className={styles.main}>
			<RandomButton
				updateQuote={updateQuote}
				setShownMoreQuotes={setShownMoreQuotes}
			/>
			{content}
		</main>
	);
}

export default MainContainer;
