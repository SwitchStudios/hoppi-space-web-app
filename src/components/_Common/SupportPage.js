import React from 'react';

import ContactForm from './ContactForm';

const SupportPage = () => {
    return (
        <main>
            <div className="container-fluid">
                <h1>Hoppi Space Support</h1>
                <h2>Night or day, we're here to help!</h2>
                <h3>FAQ</h3>
                <h3>Still have questions?</h3>
                <ContactForm />
            </div>
        </main>
    );
};

export default SupportPage;
