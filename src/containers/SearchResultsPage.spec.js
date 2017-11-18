import React from 'react';
import { shallow } from 'enzyme';

import { SearchResultsPage } from './SearchResultsPage';
import SearchResults from '../components/SearchResults';

describe('<SearchResultsPage />', () => {
    it('should contain <SearchResults />', () => {
        const actions = {
            searchSpaces: () => {}
        };

        const wrapper = shallow(<SearchResultsPage actions={actions} />);
        expect(wrapper.find(SearchResults).length).toEqual(1);
    });
});
