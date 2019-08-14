import React, { Component } from 'react';

export default class StockCard extends Component {

	state = {
		clicked: false,
		profile: {}
	}

	handleClick = () => {
		this.setState({clicked: !this.state.clicked});
		fetch(`https://financialmodelingprep.com/api/v3/company/profile/${this.props.stock.symbol}`)
		.then(res => res.json())
		.then(stockData => this.setState({profile: stockData.profile}))
	}



	render() {
		// console.log("clicked", this.state.clicked);
		// console.log("profile", this.state.profile)
		return(
			<div className="box" onClick={() => this.handleClick()}>
				{Object.keys(this.state.profile).length > 0 && this.state.clicked ? <img src={this.state.profile.image} /> : `${this.props.stock.name} $${this.props.stock.price}`}
			</div>
		)
	}
}