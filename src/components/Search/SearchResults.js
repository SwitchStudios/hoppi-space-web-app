import React from 'react';

import SpaceResultItem from '../Space/SpaceResultItem';
import SearchResultsMap from './SearchResultsMap';

const SearchResults = () => {
    return (
        <div id="search-results" className="row">
            <SearchResultsMap/>
            <div id="search-results-list" className="col-xs-12 col-sm-8 col-md-8">
                <div className="container-fluid">
                    <div className="row">
                        <p>52 results found for "Art" spaces in "San Francisco"</p>
                    </div>
                    <div className="row">
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                        <SpaceResultItem/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
