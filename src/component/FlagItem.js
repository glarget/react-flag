import React from 'react';
import { END_POINT_FLAG } from "../constant.js";

/**
 * Return a flag with the appropriate country
 * (Functional component)
 */
const FlagItem = ({countryData}) => {
    const country = countryData.country;

    if(!country){
        return <span> No data found </span>
    }
    return (
        <div className="flags-item-wrapper">
            <img className="flags" alt={country + " flag "} src={`${END_POINT_FLAG}${country}.jpg`}/>
        </div>
    )
};

export default FlagItem;