import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      '/csvjson.json'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
	console.log('data',data);
  };
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    seriesField: 'type',
    // xAxis: {
    //   type: 'datetime',
    // },
    yAxis: {},
    //slider: {
    //  start: 0,
    //  end: 1,
    //},
  };

  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
