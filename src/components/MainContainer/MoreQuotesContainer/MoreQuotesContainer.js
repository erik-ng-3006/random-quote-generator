import React from 'react';
import Card from '../../UI/Card';
import styles from './MoreQuotesContainer.module.css';
import ReturnButton from './ReturnButton/ReturnButton';

function MoreQuotesContainer({ setShownMoreQuotes }) {
	return (
		<div className={styles['more-quotes-container']}>
			<h2>Bill Gates</h2>
			<ul className={styles['list-items']}>
				<Card>
					<li>
						“The first rule of any technology used in a business is
						that automation applied to an efficient operation will
						magnify the efficiency. The second is that automation
						applied to an inefficient operation will magnify the
						inefficiency.”
					</li>
				</Card>
				<Card>
					<li>
						“We always overestimate the change that will occur in
						the next two years and underestimate the change that
						will occur in the next ten. Don't let yourself be lulled
						into inaction.”
					</li>
				</Card>
				<Card>
					<li>
						"Climate change is a terrible problem, and it absolutely
						needs to be solved. It deserves to be a huge priority."
					</li>
				</Card>
			</ul>
			<ReturnButton setShownMoreQuotes={setShownMoreQuotes} />
		</div>
	);
}

export default MoreQuotesContainer;
