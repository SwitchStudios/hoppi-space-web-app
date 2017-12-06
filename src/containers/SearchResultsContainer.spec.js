import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsContainer from './SearchResultsContainer';
import SearchResults from '../components/Search/SearchResults';

describe('<SearchResultsContainer />', () => {
    it('should contain <SearchResults />', () => {
        const actions = {
            searchSpaces: () => {}
        };

        const wrapper = shallow(<SearchResultsContainer actions={actions} />);
        expect(wrapper.find(SearchResults).length).toEqual(1);
    });
});
