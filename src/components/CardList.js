import React, {Component} from 'react';
import Card from './Card';

	class CardList extends Component{
		render(){
			/*here props is an array of robots*/
			const {robots}=this.props;
			return(
				<div>
				{
					robots.map((robot,i)=>{
						return ( <Card key={robot.id} 
							id={robot.id} 
							name={robot.name} 
							email={robot.email} />
							);
					})
				}
				</div>
				)

			};
		}
export default CardList;