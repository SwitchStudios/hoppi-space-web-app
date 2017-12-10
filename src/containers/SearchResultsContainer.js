import React from 'react';

import SearchResults from '../components/Search/SearchResults';
import SearchForm from '../components/Search/SearchForm';

const SearchResultsContainer = () => {
    return (
        <main>
            <div className="container-fluid">
                <SearchResults />
            </div>
        </main>
    );
};

export default SearchResultsContainer;
