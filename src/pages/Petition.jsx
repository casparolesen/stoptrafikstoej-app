import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import ContactForm from '../components/ContactForm';

import './petition.css';

const Petition = () => (
    <div className="petition">
        <CustomNavbar />
        <div className="petition__content">
            <h1>Underskriv</h1>
            <ContactForm />
        </div>
    </div>
      
);

export default Petition;