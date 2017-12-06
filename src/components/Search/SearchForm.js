import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { searchSpaces } from '../../actions/spaceSearchActions';

const SearchForm = () => {
    return (
        <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInput">Location</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Washington, D.C." />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Type</label>
            <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputGroup" placeholder="Dance" />

            <button type="submit" className="btn btn-primary" onClick={searchSpaces}>Search</button>
        </form>
    );
};

export default SearchForm;
