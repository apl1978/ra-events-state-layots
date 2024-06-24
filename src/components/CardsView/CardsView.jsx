import { Component } from 'react';
import { ShopCard } from './ShopCard';

export class CardsView extends Component {
	
	render() {
		const {cards} = this.props
		let indexCard = 0;
		return (
			<div className='cardsView'>
			{cards.map((card) => (
				<ShopCard card={card} key={indexCard++} />			
			))}
			</div>			
		);
	}
}
