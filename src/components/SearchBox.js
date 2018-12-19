import React, { Component } from 'react';

class SearchBox extends Component {
  render() {
    return(
    	<div className="pa2">
<input className=" f3 pa2 ma4 ba b--green bg-lightest-blue shadow-3 w-20 h3" type="search" placeholder="Enter a name here..." 
onChange={this.props.searchCriteria}/>
</div>
    	)}
}
export default SearchBox;