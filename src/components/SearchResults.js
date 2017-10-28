import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = (searchSpaces) => {
    return (
        <div>
            <h1>Search Results</h1>
            <button onClick={searchSpaces}>Search</button>
        </div>
    );
};

SearchResults.propTypes = {
    searchSpaces: PropTypes.func.isRequired
};

export default SearchResults;
