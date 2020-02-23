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
		cookies.set('message', state.message, { path: '/' });		
		return state
	}

	// Decode Function run onChange of Input calling Express server running on Port 3001
	async decode(input){
		const host = window.location.hostname;
		const url = "http://"+ host +":3001/trussle/server/?message="+input
		try {
			const res = await fetch(url);
			if (res.status >= 400)
			   throw new Error("something went wrong")
			  await res.json().then(			  		
				 		res => this.setState({message:res.decoded.join("")})
				 	);
		 } catch (err) {
		   console.error(err);
		   this.setState({message:"Decoding Service is not available. Please again try later."})
		 }
	}

	numInput(e){
		const input = e.target.value;
		this.setState({input:input});
		// Only decode numbers and spaces
		if (input.match(/^[0-9\s]+$/) != null){
			// call to decode message function 
			this.decode(input);
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


