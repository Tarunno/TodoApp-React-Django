import React, { Component } from 'react';
import Statchart from './Statchart';
import PropTypes from 'prop-types';

class Stat extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels: ['Total', 'Completed', 'Deleted'],
				datasets:[
					{
						data: [],
						backgroundColor:['#79aded', '#8ef07f', '#f07f7f'],
					}
				]
			},
			stat: []
		}
		this.fetchStat = this.fetchStat.bind(this);
	}

	componentWillMount(){
		this.fetchStat()
	}

	// fetch stat
	fetchStat = () => {
		console.log("fetching stat...");
		var url = 'http://localhost:8000/todo/task-count/';
		fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			this.setState({
				stat: [data.count_task, data.count_completed, data.count_delete]
			});
		})
	}

	// reset counter
	resetCounter = () => {
		console.log("fetching stat...");
		var url = 'http://localhost:8000/todo/task-count-reset/';
		fetch(url)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			this.setState({
				stat: [0, 0, 0]
			});
		})
	}

	render(){
		return(
			<div>
				<button style={buttonStyle} type="button" onClick={this.resetCounter}> Reset </button>
				<Statchart chartData={this.state.chartData} stat={this.state.stat}/>
			</div>
		);
	}
}

// style
const buttonStyle = {
	padding: '10px',
	backgroundColor: '#d92173',
	border: 'none',
	color: '#ffffff',
	fontSize: '13px',
	cursor: 'pointer',
	borderRadius: '2px',
	position: 'absolute',
	top: '100px',
	left: '16px'
}

export default Stat;
