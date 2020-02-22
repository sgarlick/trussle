import React, { Component } from 'react';
import { Header } from './header';
import './homepage.css';
import Cookies from 'universal-cookie';

export class Homepage extends Component {
    constructor(props) {
        super(props);
		this.state = { 
			input: new Cookies().get('input'),
			message: new Cookies().get('message')
		};			
	}

	// set cookies on any state change
	static getDerivedStateFromProps(props,state){
		const cookies = new Cookies();
		cookies.set('input', state.input, { path: '/' });
		cookies.set('message', JSON.stringify(state.message), { path: '/' });		
		return state
	}

	// Decode Function run onChange of Input calling Express server running on Port 3001
	decode(input){
		const host = window.location.hostname;
		//console.log(host);
		const url = "http://"+ host +":3001/trussle/server/?message="+input
			fetch(url, {method: 'GET'})
			.then(response => {
			response.json().then(			
				res => this.setState({message:res.decoded})
			);
		});
	}

	numInput(e){
		const input = e.target.value;
		this.setState({input:input});
		// Only decode numbers and spaces
		if (input.match(/^[0-9\s]+$/) != null){
			// call to decode message function 
			const message = this.decode(input);
			this.setState({message:message});
		}
		else{this.setState({message:"Only Numeric Numbers allowed!"});}
		
	}
	// Render Page
	render() {
		const input = this.state.input==="undefined"?'':this.state.input;
		const message = this.state.message==="undefined"?'':this.state.message;
		return (
			<div>
				<div id="header">
					<Header/>					
				</div>
				<div id="body">
					<div className="headMain">Numericode Decoder</div>
					<div className="decoder">
						<p>Numeric Code:</p>
						<div className="inputBox"><input id="numInput" onChange={(e)=>this.numInput(e)} placeholder="Enter your Numeric Code" value={input}></input></div>
						<div className="secretMessage">
							<div>Secret Message</div>
							<div id="messageResponse">{message}</div>
						</div>
					</div>
				</div>
			</div>
  		);
	}
}


