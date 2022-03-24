import React from 'react';
import Card from '../../../UI/Card';
function Quote({ quote }) {
	return (
		<Card>
			<p>
				“The first rule of any technology used in a business is that
				automation applied to an efficient operation will magnify the
				efficiency. The second is that automation applied to an
				inefficient operation will magnify the inefficiency.”
			</p>
		</Card>
	);
}

export default Quote;
