import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Lessons.css';

const Lessons = () => {
  return (
    <div className='lessons'>
      <Container className='layout'>
        <Row>
          <Col id='border_rigth'>
            <h3>MATA PELAJARAN POTENSI</h3>
            <p><span className='color_star'>*</span>Mata pelajaran potensi adalah mata pelajaran yang rata-rata nilai pada kabupaten = 70</p>
            <h6 className='lesson_layout'>Biologi 42,15%</h6>
          </Col>

          <Col id='no_border'>
            <h3>MATA PELAJARAN DARURAT</h3>
            <p><span className='color_star'>*</span>Mata pelajaran darurat adalah mata pelajaran yang rata-rata nilai pada kabupaten = 50</p>
            <h6 className='lesson_layout'>Fisika 76,35%</h6>
          </Col>
        </Row>
        <h3 id='information'>INFORMASI HASIL PEMETAAN LEARNING STYLE</h3>
        <div className='line_lessons'></div>
      </Container>
    </div>
  )
}

export default Lessons;
