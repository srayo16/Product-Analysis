import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';
import './Dashboard.css';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,

            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,

            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,

            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,

            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,

            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,

            "revenue": 61000
        }
    ]

    const data2 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container mt-5 contentHandle pb-5 mb-5'>
            <div className='pe-5 pb-5'>
                <h1 className='fs-4 text-primary text-center pb-3'>Investment vs Revenue </h1>
                <BarChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

            <div className='pb-5 pe-5'>
                <h1 className='fs-4 text-primary text-center pb-3'>Month wise sell </h1>
                <LineChart width={400} height={250} data={data2}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />

                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;