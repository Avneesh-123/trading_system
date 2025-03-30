import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', process.env.REACT_APP_API_URL); // Debugging line
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/market-data`);
                setData(response.data);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error('Error fetching market data:', error);
                setError('Error fetching market data. Please try again later.');
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Fetch data every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Algorithmic Trading Dashboard</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data ? (
                <>
                    <h2>Current Price: ${data.price.toFixed(2)}</h2>
                    <h3 style={{ color: data.signal === 'Buy' ? 'green' : data.signal === 'Sell' ? 'red' : 'black' }}>
                        Signal: {data.signal}
                    </h3>
                    <ResponsiveContainer width="80%" height={300}>
                        <LineChart data={[{ name: 'Short MA', value: data.shortMA }, { name: 'Long MA', value: data.longMA }]}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default App;