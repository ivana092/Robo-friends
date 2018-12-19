	import React, {Component} from 'react';

	class Card extends Component{
		render(){
			/*here props is a single robot object*/
			const {id,name,email}=this.props;
			return(
				<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt="robo" src={`https://robohash.org/${id}?200*200`} />
	<div>
	<h1>{name}</h1>
	<p>{email}</p>
	</div>
	</div>
				)
		};
	}
	export default Card;