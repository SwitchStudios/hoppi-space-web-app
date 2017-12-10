import React from 'react';

import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';

export const SearchResultsPage = () => {
    return (
        <div>
            <h1>Find your next space!</h1>
            <SearchForm />
            <h2>Search Results</h2>
            <SearchResults />
        </div>
    );
};

export default SearchResultsPage;
