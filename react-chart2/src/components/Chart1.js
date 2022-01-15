import React from 'react';
import Chart from 'react-apexcharts';
import { Container, Row, Col} from 'react-bootstrap'

const Chart1 = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>

          </Col>

          <Col>
            <Chart
              type='donut'
              series={[75638, 251869]}
              options={{
                labels:['Selesai Mengerjakan ', 'Tidak Selesai'],
                colors:['#e39a52','#adb5bd'],
                style:{
                  fontSize: '10px'
                }
              }}
              className='chart_style'
              />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Chart1
