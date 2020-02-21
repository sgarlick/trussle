import React, { Component } from 'react';
import { Header } from './header';
import './homepage.css';

export class Homepage extends Component {
    constructor(props) {
        super(props);
		this.state = { 
			message: ''
		};			
	}

	// Decode Function run onChange of Input
	decode(input){
		// Split numbers on spaces
		var numberArray = input.split(" ");
		// message conversion using fromCharcode counting from 65
		let message = numberArray.map((numgroup)=>{
			let num = parseInt(numgroup);
			while(num>=27){
					num = num/27;
			} 
			if (Number.isInteger(num)){
				return String.fromCharCode(num+64);
			}
			else return ' ';
		}); 
		return message
	}

	numInput(e){
		const input = e.target.value;
		if (input.match(/^[0-9\s]+$/) != null){
			const message = this.decode(input);
			console.log(message)
			this.setState({message:message});
		}
		else{
			this.setState({message:"Only Numeric Numbers allowed!"});
		}
	}
	
	render() {
		return (
			<div>
				<div id="header">
					<Header/>					
				</div>
				<div id="body">
					<div className="headMain">Numericode Decoder</div>
					<div className="decoder">
						<p>Numeric Code:</p>
						<div className="inputBox"><input id="numInput" onChange={(e)=>this.numInput(e)} placeholder="Enter your Numeric Code"></input></div>
						<div className="secretMessage">
							<div>Secret Message</div>
							<div id="messageResponse">{this.state.message}</div>
						</div>
					</div>
				</div>
			</div>
  		);
	}
}


