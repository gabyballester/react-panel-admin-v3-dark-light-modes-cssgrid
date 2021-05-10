import React, { useEffect, useState } from 'react';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import '../../node_modules/react-vis/dist/style.css';
import './Chart.css';

const Chart = ({ chartRef }) => {
  const [width, setWidth] = useState('600')

  useEffect(() => {
    getWidth()
  }, [])

  window.addEventListener('resize', (event) => {
    setTimeout(() => {
    getWidth()
  }, 2000);
  });

  const getWidth = () => {
    setTimeout(() => {
      setWidth('300')
      setWidth(chartRef.current.clientWidth.toString() - 80)
    }, 2000);
  }

  return (
    <div className="chart-container">
      <XYPlot height={300} width={width}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
  )
}

const data = [
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 },
  { x: 9, y: 0 },
  { x: 9, y: 0 },
  { x: 9, y: 0 },
  { x: 10, y: 3 }
]

export default Chart;

