import { Component } from 'react';

export class ShopItem extends Component {
	
	render() {
		const {item} = this.props
		
		return (
			<div className='shopItem'>
			  <div className='wrap_img'>
				<img src={item.img} alt='' />
			  </div>
			  <h2 className='heading'>{item.name}</h2>
			  <p>{item.color}</p>
			  <span className='bodyCart_price'>${item.price}</span>
			  <button className='buttonCart'>Add to Cart</button>
			</div>
		);
	}
}
