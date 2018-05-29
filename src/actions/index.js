import axios from 'axios';
import { GET_COUNTRIES, END_POINT_COUNTRIES, END_POINT_POPULATION, GET_POPULATION } from "../constant.js";

/**
 * get all the countries based on a webservice call.
 * @function
 * @return {Object} : type and payload
 */
export function getCountries(){
    return function (dispatch) {
        return axios(END_POINT_COUNTRIES).then(function(response){
            dispatch({
                type : GET_COUNTRIES,
                payload: response.data.countries

            });
        });
    }
};

/**
 * get all the today and tomorrow population on a webservice call.
 * @function
 * @return {Object} : type and payload
 */
export function getTodayAndTomorrowPeople(country){
    return function (dispatch) {
        return axios(`${END_POINT_POPULATION}${country}/today-and-tomorrow/`).then(function(response){
            dispatch({
                type : GET_POPULATION,
                payload: response.data.total_population
            });
        });
    }
};







