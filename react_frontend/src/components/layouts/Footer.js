import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return(
			<div style={FooterStyle}>
				<p>Todo App | mahadi hasan tarunno</p>
			</div>
		);
	}
}

const FooterStyle = {
	position: 'absolute',
	bottom: '0px',
	width: '100vw',
	fontSize: '11px',
	backgroundColor: '#1f1f1f',
	color: '#ffffff',
	padding: '12px',
	justifyContent: 'center',
	textAlign: 'center',
	borderTop: '5px solid #85e69f'
}

export default Footer;
