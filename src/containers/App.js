import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField,requestRobots } from '../actions';

const mapStateToProps =(state)=>{
  return {
    searchField: state.searchRobotsReducer.searchField, //getting value from reducer function
    isPending: state.requestRobotsReducer.isPending,
    robots: state.requestRobotsReducer.robots,
    error: state.requestRobotsReducer.error
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    onSearchChange: (event)=>dispatch(setSearchField(event.target.value)),
    onRobotsRequest: ()=>dispatch(requestRobots())
  }
}
class App extends Component {

 /* constructor(){
    super();
    this.state={
      robots : [],
     // searchField: ''
    }
  } */

  componentDidMount(){
    this.props.onRobotsRequest();
   /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users})
    ); */
  }

 /* componentDidMount(){
const usersAsync= async function(){
  try{
const users= await fetch('https://jsonplaceholder.typicode.com/users');
const usersPromise= await users.json();
console.log(usersPromise);
const a= await this.setState({robots:usersPromise});

}
catch(e){
  console.log("Oops encountered an error!",e);
}
}
console.log(usersAsync());
}*/

 /* onSearchChange = (event)=>
  {
    // for setting searchField value set through setState only
this.setState({
  searchField : event.target.value
})
}*/

render() {
    //const {robots}= this.state;
    const {searchField, onSearchChange, robots, isPending}=this.props;
    const filteredRobots=robots.filter(robot=>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
      )
    //return(!robots.length)?
    return isPending ?
    <h1>Loading....</h1> :
    (
    <div className="tc">
    <h1 className="font-effect-neon" style={{fontSize:'3em'}}>ROBO FRIENDS</h1>
    <SearchBox searchCriteria={onSearchChange} />
    <Scroll>
    <ErrorBoundary>
    <CardList robots={filteredRobots} />
    </ErrorBoundary>
    </Scroll>
    </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
