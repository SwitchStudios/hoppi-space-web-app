import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

export const SearchResultsPage = () => {
  return (
    <div>
      <h1>Search Results Page</h1>
    </div>
  );
};

SearchResultsPage.propTypes = {
  actions: PropTypes.object.isRequired
};

export default SearchResultsPage;
