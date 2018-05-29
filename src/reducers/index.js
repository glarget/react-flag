import { combineReducers } from 'redux';
import CountriesReducer from './r-countries';
import CountriesPopulation from './r-population';

// use combineReducers to return only one object including all the reducers
const rootReducer = combineReducers(
  {
    countries : CountriesReducer,
    population: CountriesPopulation
  }
);

export default rootReducer;