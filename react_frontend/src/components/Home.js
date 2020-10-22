import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import PropTypes from 'prop-types';

class Home extends Component{
	constructor(props){
        super(props);
        this.state = {
            todos: [],
            activeItem: {
                id: null,
                title: '',
                completed: false,
            },
            editing: false,
        }
        this.fetchTask = this.fetchTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetActiveItem = this.resetActiveItem.bind(this);
        this.getToken = this.getToken.bind(this);
		this.EditTodo = this.EditTodo.bind(this);
    };

    // CSRF token
    getToken(name){
           let cookieValue = null;
           if (document.cookie && document.cookie !== '') {
               const cookies = document.cookie.split(';');
               for (let i = 0; i < cookies.length; i++) {
                   const cookie = cookies[i].trim();
                   if (cookie.substring(0, name.length + 1) === (name + '=')) {
                       cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                       break;
                   }
               }
           }
        return cookieValue;
    }

    componentWillMount(){
        this.fetchTask();
    }

    // reset activeItem
    resetActiveItem = () => {
        this.setState({
            activeItem: {
                id: null,
                title: '',
                completed: false,
            },
			editing: false,
        });
    }

    // tasks
    fetchTask = () =>{
        console.log("fetching tasks...");
        var url = 'http://localhost:8000/todo/task-list/';
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                todos: data
            });
            console.log("Tasks fetched!");
        })
    }

    handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                title: value
            }
        });
    }

    handleSubmit = () => {
        console.log('activeItem: ', this.state.activeItem);
        const csrftoken = this.getToken('csrftoken');

		if(this.state.editing === true){
			var url = 'http://localhost:8000/todo/task-update/'+this.state.activeItem.id;
		}
		else{
			var url = 'http://localhost:8000/todo/task-create/';
		}
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(this.state.activeItem)
        })
        .then((res) => {
            this.fetchTask();
            this.resetActiveItem();
            document.querySelector('.task-input').value = "";
        })
        .catch((err) => {
            console.log('ERROR: ', err);
        })
    }


    // toggle complete
    markComplete = (id) =>{
        console.log("markComplete");
        var url = 'http://localhost:8000/todo/task-completed/'+id;

        fetch(url)
        .then((res) => {
            return res;
        })
        .then((data) => {
            this.fetchTask();
        })
        .catch((err) => {
            console.log('ERROR: ', err);
        })
    }

	// eidt
	EditTodo(task){
		console.log("EditTodo");
		this.setState({
			activeItem: task,
			editing: true
		});
	}

    // delete
    deleteTodo = (id) => {
        console.log("deleteTodo");
        var url = 'http://localhost:8000/todo/task-delete/'+id;

        fetch(url)
        .then((res) => {
            return res;
        })
        .then((data) => {
            this.fetchTask();
        })
        .catch((err) => {
            console.log('ERROR: ', err);
        })
    }

	render(){
		return(
			<div>
				<AddTodo handleChange={this.handleChange} handleSubmit={this.handleSubmit} inputValue={this.state.activeItem}/>
				<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} EditTodo={this.EditTodo}/>
			</div>
		);
	}
}

export default Home;
