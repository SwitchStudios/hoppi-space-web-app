import React from 'react';
import PropTypes from 'prop-types';

import SpaceResultItem from './SpaceResultItem';

const SearchResults = (searchSpaces) => {
    return (
        <div>
            <SpaceResultItem />
            <SpaceResultItem />
        </div>
    );
};

SearchResults.propTypes = {
    searchSpaces: PropTypes.func.isRequired
};

export default SearchResults;
