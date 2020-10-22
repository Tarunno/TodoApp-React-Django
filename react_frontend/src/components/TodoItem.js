import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
	getStyle = () =>{
		return {
			fontSize: '13px',
			fontWeight: 'bolder',
			padding: '10px',
			backgroundColor: '#f4f4f4',
			borderBottom: '.01mm #85e69f dotted',
			color: this.props.todo.completed ? '#949494': 'black'
		}
	}

	render(){
		const {id, title} = this.props.todo;
		const self = this.props;
		return(
			<div style={this.getStyle()}>
				<p>
					<input style={checkboxStyle} type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
					{this.props.todo.title}
					<i style={DeleteBtn} className="far fa-trash-alt" onClick={this.props.deleteTodo.bind(this, id)}></i>
					<i style={EditBtn} onClick={() => self.EditTodo(this.props.todo)}className="fas fa-edit"></i>
				</p>
			</div>
		);
	}
}

// style
const DeleteBtn = {
	float: 'right',
	color: 'red',
	cursor: 'pointer',
	marginLeft: '10px',
	marginRight: '20px'
}
const EditBtn = {
	float: 'right',
	color: '#e0db34',
	cursor: 'pointer'
}
const checkboxStyle = {
	marginLeft: '20px',
}

// prop types
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}
export default TodoItem;
