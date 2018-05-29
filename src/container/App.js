import React, { Component } from 'react';
import SearchBar from "./SearchBar";

const DEFAULT_COUNTRY = "France";

/**
 * Contains the searchBar container with defaultCountry parameter
 * (Stateless class component)
 */
class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <SearchBar defaultCountry={DEFAULT_COUNTRY}/>
            </div>
        )
    }
}

export default App;