import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const ph = {
                        name: parts[0],
                        value: parseInt(parts[1])
                    }
                    return ph;
                });
                setPhones(phoneData);
                console.log(phoneData);
        })
    },[])
    return (
        <LineChart width={800} height={400} data={phones}>
            <Line type="monotone" dataKey={"value"} stroke="#8884d8" />
            <Line type="monotone" dataKey={"name"} stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={"name"} />
            <YAxis dataKey={'value'} />
            <Tooltip />
        </LineChart>
    );
};

export default SpecialChart;