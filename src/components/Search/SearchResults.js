import React from 'react';

import SpaceResultItem from '../Space/SpaceResultItem';

const SearchResults = () => {
    return (
        <div id="search-results-list" className="container">
            <SpaceResultItem />
            <SpaceResultItem />
            <SpaceResultItem />
            <SpaceResultItem />
        </div>
    );
};

export default SearchResults;
