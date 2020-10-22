import React, { Component } from 'react';

class AddTodo extends Component{
	render(){
		return(
			<div style={AddTodoStyle}>
				<input value={this.props.inputValue.title} className="task-input" onChange={this.props.handleChange} style={AddTodoTextStyle} type="text" name="title" placeholder="Add todo..." />
				<input onClick={this.props.handleSubmit} style={AddTodoBtnStyle} type="submit" value="Submit" />
 			</div>
		);
	}
}
// style
const AddTodoStyle = {
	display: 'flex',
}
const AddTodoTextStyle = {
	flex: '7',
	padding: '10px',
	border: 'none'
}
const AddTodoBtnStyle = {
	flex: '2',
	padding: '10px',
	border: 'none',
	cursor: 'pointer'
}

export default AddTodo;
