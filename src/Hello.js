import React,{Component} from 'react';
import './Hello.css';

class Hello extends Component{
	render(){
		return(
			<div className="f3 tc">
			<h1> Hello World</h1>
			<p>{this.props.greeting}</p>
			<p> Wassup </p>
			</div>
		);
	}
}

export default Hello;