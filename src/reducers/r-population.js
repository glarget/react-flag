import { GET_POPULATION } from "../constant.js";

/**
 * Return new state based on the action we get
 * @param {Array} state - The previous state (default value: null).
 * @param {Object} action - The current action.
 * (Reducer)
 */
export default function (state = [], action)
{
    switch(action.type){
        case GET_POPULATION:
            return action.payload;
    }
    return state;
};