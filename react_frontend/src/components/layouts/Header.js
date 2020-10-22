import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
	render(){
		return(
			<div style={HeaderStyle}>
				<h2> Todo App </h2>
				<Link to="/" style={NavStyle}> HOME </Link>
				<Link to="/stat" style={NavStyle}> STATISTICS </Link>
			</div>
		);
	}
}

const HeaderStyle = {
	backgroundColor: '#1f1f1f',
	color: '#ffffff',
	padding: '18px',
	justifyContent: 'center',
	textAlign: 'center',
	borderBottom: '5px solid #85e69f'
}
const NavStyle = {
	color: 'white',
	textDecoration: 'none',
	padding: '2px',
	fontSize: '11px'
}

export default Header;
