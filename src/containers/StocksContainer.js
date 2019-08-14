import React from 'react';
import StockCard from '../components/StockCard';

const StocksContainer = (props) => {
	console.log(props.stockData)
	return (
		<div className="wrapper">
			{props.stockData.map(stock => <StockCard stock={stock} key={stock.symbol}/>)}
		</div>
	);
}

export default StocksContainer;