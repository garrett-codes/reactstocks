import React, { Component } from 'react';

export default class StockCard extends Component {

	state = {
		clicked: false
	}

	render() {
		return(
			<div className="box" onClick={() => this.handleClick()}>
				{this.props.stock.name}   ${this.props.stock.price}
			</div>
		)
	}
}