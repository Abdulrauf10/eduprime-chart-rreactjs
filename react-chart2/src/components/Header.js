import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <div className='list_item'>
        <div>
          <i className="fas fa-hourglass"></i>
        </div>

        <div className='middle'>
            <h3>BENCMARKING COMPREHENSIVE</h3>
            <h4>ACADEMIC GENERAL CHECK UP (C' AGCU)</h4>
            <p>DINAS PENDIDIKAN PROVINSI JAWA TIMUR</p>
        </div>

        <div>
          <h2>AGCU</h2>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Header
