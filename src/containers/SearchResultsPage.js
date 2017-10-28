import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/spaceSearchActions';
import SearchResults from '../components/SearchResults';

export const SearchResultsPage = (props) => {
  return (
    <SearchResults
      searchSpaces={props.actions.searchSpaces}
    />
  );
};

SearchResultsPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapDispatchToProps
)(SearchResultsPage);
