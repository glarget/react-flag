import React from 'react';

/**
 * Return the population number for today and tomorrow
 * (Functional component)
 */
const Population = (props) => {
    const {dateToday, dateTomorrow, todayPopulation, tomorrowPopulation} = props;

    // if(!country){
    //     return <span> No data found </span>
    // }
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Population</th>
                <th scope="col">Auj : {dateToday}</th>
                <th scope="col">Demain: {dateTomorrow}</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nombre</th>
                    <td className="font-weight-bold text-info">{todayPopulation}</td>
                    <td className="font-weight-bold text-info">{tomorrowPopulation}</td>
                </tr>
            </tbody>
        </table>
    )
};

export default Population;