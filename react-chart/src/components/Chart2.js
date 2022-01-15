import React from 'react';
import Chart from 'react-apexcharts';
import { Container, Row, Col} from 'react-bootstrap';
import './Chart2.css'

const Chart2 = () => {
  return (
    <div className='chart2'>
      <Container className='chart_line'>
        <Row className='chart2_layout'>
          <Col>
            <Chart 
              type='donut'
              series={[59388, 75638, 251869]}
              options={{
                labels:['Rata-rata atas', 'Rata-rata', 'Rata-rata Bawah'],
                colors:['#4cc9f0','#f7b267','#ec7470'],
                
              }}
              className='chart2_style'
            />
            <h5 className='chart_desc'>ADVERSITY QUOTIENT</h5>
          </Col>

          <Col>
            <Chart 
              type='donut'
              series={[59388, 75638, 251869]}
              options={{
                labels:['Rata-rata atas', 'Rata-rata', 'Rata-rata Bawah'],
                colors:['#4cc9f0','#f7b267','#ec7470'],
                
              }}
              className='chart2_style'
            />

            <h5 className='chart_desc'>ADVERSITY QUOTIENT</h5>
          </Col>

          <Col>
            <Chart 
              type='donut'
              series={[59388, 75638, 251869]}
              options={{
                labels:['Rata-rata atas', 'Rata-rata', 'Rata-rata Bawah'],
                colors:['#4cc9f0','#f7b267','#ec7470'],
                
              }}
              className='chart2_style'
            />

            <h5 className='chart_desc'>ADVERSITY QUOTIENT</h5>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Chart2;
