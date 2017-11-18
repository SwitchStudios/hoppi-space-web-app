import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';

export const SearchResultsPage = () => {
    return (
        <div>
            <SearchForm />
            <h2>Search Results</h2>
            <SearchResults />
        </div>
    );
};

export default SearchResultsPage;
