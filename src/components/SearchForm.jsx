import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import * as actions from '../actions/spaceSearchActions';

const SearchForm = () => {
    return (
        <form class="form-inline">
            <label class="sr-only" for="inlineFormInput">Location</label>
            <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Washington, D.C." />

            <label class="sr-only" for="inlineFormInputGroup">Type</label>
            <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Dance" />

            <button type="submit" class="btn btn-primary" onClick={searchSpaces}>Search</button>
        </form>
    );
};

export default SearchForm;
