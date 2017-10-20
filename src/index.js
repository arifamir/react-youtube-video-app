/*
* Youtube Video player via React
*
* */

// Import the react
import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from "./components/search_bar";


const API_KEY = 'AIzaSyB9VjlYYOHY92gEA-tnLUMyZoLFQg0QLxU';

// Create a component which will be used to render the front end html ec

const App =  () => {
    return(
        <div>
            <SearchBar/>
        </div>

    );
}

ReactDom.render(<App />, document.querySelector('.container'));