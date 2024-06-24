import { Component } from 'react';

export class IconSwitch extends Component {
	
	render() {
		const {props} = this.props
		return (
			<header className='switch'>
				<button className='material-icons' onClick={this.props.onClick}>{this.props.icon}</button>			
			</header>			
		);
	}
}