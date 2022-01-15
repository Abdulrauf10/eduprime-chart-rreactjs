import React from 'react';
import Chart from 'react-apexcharts';
import { Container } from 'react-bootstrap';
import './Chart1.css';

const Chart1 = () => {
  return (
    <div className='chart_position1'>
      <Container>
        <Chart
        type='donut'
        series={[59388, 75638, 251869]}
        options={{
          labels:['KATEGORI MUDAH <br/> 15,3% atau 59.388 siswa, soal dalam kategori Mudah ', 'KATEGORI SEDANG <br/> 19,6% atau 75.638 siswa, soal dalam kategori Sedang', 'KATEGORI SULIT <br/> 65,1% atau 251.869 siswa, soal dalam kategori Sulit'],
          colors:['#4cc9f0','#f7b267','#ec7470'],
          style:{
             fontSize: '10px'
          }
        }}
        className='chart_style'
      />
      </Container>
    </div>
  )
}

export default Chart1
