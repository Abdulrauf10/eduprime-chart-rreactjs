import React from 'react';
import { Container } from 'react-bootstrap';
import './List.css';

const List = () => {
  return (
    <div className='list'>
      <Container>
        <div className='batteray'>
          <i className="fas fa-battery-three-quarters"></i>
          <h6>KOMPOSISI TEST C' AGCU</h6>
          <p className='title'>DINAS PENDIDIKAN PROVINSI JAWA TIMUR</p>
        </div>

        <ul>
          <li>
            Kognitif 4 Mata Pelajaran
          </li>

          <li>
            Learning Style 48 Butir Soal
          </li>

          <li>
            Psycology Test 24 Butir Soal
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default List
