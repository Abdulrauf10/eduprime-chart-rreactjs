import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LearningPercentage.css';

const LearningPercentage = () => {
  return (
    <div className='learning_percentage'>
      <Container className='layout_learningpercentage'>
        <Row className='row_point'>
          <Col>
            <i className="fas fa-binoculars"></i> 
            <p>42% 171.048 Siswa</p> 
            <span className='visual'>VISUAL</span>
          </Col>

          <Col>
            <i className="fas fa-headphones-alt"> </i>
            <p>37% 150.685 Siswa</p> 
            <span className='visual'>AUDITORI</span>
          </Col>

          <Col>
            <i className="fas fa-walking"></i>
            <p>21% 85.524 Siswa</p> 
            <span className='visual'>KINESTETIK</span>
          </Col>
        </Row>

        <h3 id='psycology_test'>INFORMASI HASIL PEMETAAN PSYCOLOGY TEST</h3>
        <div className='line_chart'></div>
      </Container>
    </div>
  )
}

export default LearningPercentage
