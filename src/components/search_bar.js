/*
* Search bar for the video player
*
* */

import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    placeholder="What is in your mind ?"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
            </div>);
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;