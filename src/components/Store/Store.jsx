import { Component } from 'react';
import { IconSwitch } from '../IconSwitch';
import { CardsView } from '../CardsView';
import { ListView } from '../ListView';

export class Store extends Component {
	state = { icon: 'view_list'};
	
	handleClick = () => {
		if (this.state.icon == 'view_list') 
			this.setState({ icon: 'view_module' });
		  else
			this.setState({ icon: 'view_list' });
				
	}
	
	render() {
		const {products} = this.props
		return (
			<div className='container'>
			<IconSwitch icon={this.state.icon} onClick={this.handleClick} />
			<main className='main'>
				{this.state.icon === 'view_list' ? <CardsView cards={products.products} /> : <ListView items={products.products} /> }
			</main>
			</div>	
		);
	}
}