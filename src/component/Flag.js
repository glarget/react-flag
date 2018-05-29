import React,{Component} from 'react';
import FlagItem from "../component/FlagItem";

/**
 * Contains the Flag item component with countryData parameter
 * 
 */
class Flag extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
        <FlagItem countryData={this.props}/>
    )
  }
}

export default (Flag)