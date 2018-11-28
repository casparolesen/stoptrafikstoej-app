import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CustomNavbar from '../components/CustomNavbar';

import trafikmafia from '../img/trafikmafia.jpg';
import trafikstoej from '../vid/trafikstøj.mp4'

import './frontpage.css';

const FrontPage = () => (
  <div className="frontpage">
    <CustomNavbar />
    <div className="jumbotron">
      <h1>Stop trafikstøj nu!</h1>
      <Link to="/underskriv">
        <Button bsStyle="primary">Underskriv nu</Button>
      </Link>
    </div>
  </div>
);

export default FrontPage;