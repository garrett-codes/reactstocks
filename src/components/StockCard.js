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

	renderProfile = () => {
		return (<div>
			
		</div>
		);
	}



	render() {
		// console.log("clicked", this.state.clicked);
		// console.log("profile", this.state.profile)
		return(
			<div className="box" onClick={() => this.handleClick()}>
				{
					Object.keys(this.state.profile).length > 0 && this.state.clicked ? 
					<div>
						<img height={"50%"} width={"50%"} src={this.state.profile.image} />
						<div>
							<br /> Percent Change: {this.state.profile.changesPercentage}
							<br /> Description: {this.state.profile.description}
							<br /> Exchange: {this.state.profile.exchange}
							<br /> Sector: {this.state.profile.sector} 
						</div>
					</div>
					: 
						`${this.props.stock.name} $${this.props.stock.price}`}
			</div>
		)
	}
}