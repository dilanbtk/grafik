import React, { PureComponent, useEffect } from 'react';

import { LineChart, Line,XAxis, YAxis,CartesianGrid } from 'recharts';


function Grafikbir(props) {
    
    const dataa = props.values
    

    const renderLineChart = (
        <LineChart width={600} height={300} data={dataa}>
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