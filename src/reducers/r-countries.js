import { ERROR_GET_COUNTRIES, GET_COUNTRIES } from "../constant.js";

/**
 * Return new state based on the action we get
 * @param {Array} state - The previous state (default value: null).
 * @param {Object} action - The current action.
 * (Reducer)
 */
export default function (state = null, action)
{
    switch(action.type){
        case GET_COUNTRIES:
            return action.payload;
        case ERROR_GET_COUNTRIES :
            return action.errors;
    }
    return state;
}