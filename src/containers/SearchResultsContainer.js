import React from 'react';

import SearchResults from '../components/Search/SearchResults';
import SearchForm from '../components/Search/SearchForm';

const SearchResultsContainer = () => {
    return (
        <div>
            <h1>Find your next space!</h1>
            <SearchForm />
            <h2>Search Results</h2>
            <SearchResults />
        </div>
    );
};

export default SearchResultsContainer;
