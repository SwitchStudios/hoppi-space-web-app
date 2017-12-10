import React from 'react';

import SearchResults from '../components/Search/SearchResults';

const SearchResultsContainer = () => {
    return (
        <main id="search-results-container">
            <div className="container-fluid">
                <SearchResults />
            </div>
        </main>
    );
};

export default SearchResultsContainer;
