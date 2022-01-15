import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <h4 className='report'>Report CAGCU </h4>
         <span className='jatim'>Dinas Pendidikan Jawa Timur</span>
        <h4 className='page'>hal?</h4>
        <p className='supported'>Supported By: <span className='eduprime'>EDUPRIME</span></p>
      </Container>
    </div>
  )
}

export default Footer;
