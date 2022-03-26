import React from 'react';
import Card from '../../../UI/Card';
function Quote({ quote }) {
	return <Card>{quote && <p>{quote.content}</p>}</Card>;
}

export default Quote;
