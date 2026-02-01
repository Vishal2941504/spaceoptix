import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import './TimeSeriesChart.css';

const TimeSeriesChart = ({ data }) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Hourly Space Usage</h3>
        <p className="chart-subtitle">Occupancy trends throughout the day</p>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorOccupancy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="label" 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
              domain={[0, 100]}
              label={{ value: 'Occupancy %', angle: -90, position: 'insideLeft', style: { fontSize: '0.75rem', fill: '#6b7280' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [`${value}%`, 'Occupancy']}
            />
            <Area 
              type="monotone" 
              dataKey="occupancy" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorOccupancy)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeSeriesChart;



