import React from 'react';

import Routes from '../routes';
import Header from './_Common/Header';
import Footer from './_Common/Footer';

const App = () => {
    return (
        <div>
            {Routes}
            <Header/>
            <Footer/>
        </div>
    );
};

export default App;
