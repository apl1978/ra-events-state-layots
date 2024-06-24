import { Component } from 'react';
import { ShopItem } from './ShopItem';

export class ListView extends Component {
	
	render() {
		const {items} = this.props
		let indexItem = 0;
		return (
			<div className='listView'>
			{items.map((item) => (
				<ShopItem item={item} key={indexItem++} />			
			))}
			</div>			
		);
	}
}
