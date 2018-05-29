import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {getCountries, getTodayAndTomorrowPeople} from "../actions/index";
import Population from "../component/Population";
import Flag from "../component/Flag";

/**
 * Display the searchBar container
 * Class component
 */
class SearchBar extends Component{
  constructor(props){

    // super method to get the props of parent constructor
    super(props);

    // default state here
    this.state = {
      country: this.props.defaultCountry,
      todayPopulation: null,
      tomorrowPopulation: null,
      dateToday: null,
      dateTomorrow: null
    }
  }

  // before the build of the component : we call the countries webservice to get all the countries
  componentWillMount () {
    this.props.getCountries();
  }
    
  renderSelectCountries()
  {
    const {countries} = this.props;

    if(countries){
      return (
          <div className="form-group">
              <select className="form-control flags-search" value={this.state.country} onChange={e => this.setFlagState(e)}>
                  {
                      countries.map((country) => {
                          return <option key={country} value={country}>{country}</option>
                      })
                  }
              </select>
              <Flag country={this.state.country} />
              <button className="btn btn-warning btn-lg " onClick={(e) => this.setPopulationState(e)}>Get Population</button>
              <Population dateToday={this.state.dateToday} dateTomorrow={this.state.dateTomorrow} todayPopulation={this.state.todayPopulation} tomorrowPopulation={this.state.tomorrowPopulation}/>
          </div>
      )
    } else {
      return <select>No country Found</select>
    }
  }
  render(){
    return (
        <form className="search-bar">
          {this.renderSelectCountries()}
        </form>
    )
  }
    
  /**
   * Change the state country by the new after the country change
   */
  setFlagState(e) {
    const targetCountry = e.target.value;
    this.setState(
      {
        country: targetCountry
      }
    )
  }

  /**
   * Change the today / Population state and dateToday / dateTomorrow state after selection change
   */
  setPopulationState(e) {
    e.preventDefault();

    this.props.getPopulationState(this.state.country).then(()=> {
      const {population} = this.props;
      this.setState (
        {
          todayPopulation: population[0].population,
          tomorrowPopulation: population[1].population,
          dateToday: population[0].date,
          dateTomorrow: population[1].date
      })
    });
  }
}

/**
 *  Transform the reducer state return to current props
 */
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    population: state.population
  }
};

/**
 * Dispatch the actions to props, after that we can call it
 */
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getCountries, getPopulationState: getTodayAndTomorrowPeople },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);