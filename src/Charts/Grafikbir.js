import React, { PureComponent, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { LineChart, Line,XAxis, YAxis,CartesianGrid } from 'recharts';


function Grafikbir() {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 200, pv: 4000, amt: 1400 },
    { name: 'Page C', uv: 700, pv: 4000, amt: 1400 },
    { name: 'Page D', uv: 0, pv: 4000, amt: 1400 }];

    const renderLineChart = (
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    );



    return (

        <div>
            {renderLineChart}
        </div>

    )




}
export default Grafikbir;