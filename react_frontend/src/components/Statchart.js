import React, { Component } from 'react';
import { Bar, Line, Pie} from 'react-chartjs-2'
import PropTypes from 'prop-types';

class Statchart extends Component{
	constructor(props){
		super(props);
		this.setData = this.setData.bind(this);
	}
	setData = () =>{
		this.props.chartData.datasets[0].data[0] = this.props.stat[0];
		this.props.chartData.datasets[0].data[1] = this.props.stat[1];
		this.props.chartData.datasets[0].data[2] = this.props.stat[2];
	}
	render(){
		return(
			<div style={ChartStyle}>
				{this.setData()}
				<Bar data={this.props.chartData} height={500} options={{
					scales: {
				        yAxes: [{
				            ticks: {
				                beginAtZero: true
				            }
				        }]
				    },
					maintainAspectRatio: false,
					legend: false,
				}} />
			</div>
		);
	}
}

// style
const ChartStyle = {
	width: '600px',
	margin: '20px auto'
}

// prop types
Statchart.propType = {
	counter: PropTypes.object.isRequired
}

export default Statchart;
