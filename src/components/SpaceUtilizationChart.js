import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './SpaceUtilizationChart.css';

const SpaceUtilizationChart = ({ data }) => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h3>Space Utilization by Type</h3>
        <p className="chart-subtitle">Usage breakdown across different space categories</p>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '0.75rem' }}
              domain={[0, 100]}
              label={{ value: 'Utilization %', angle: -90, position: 'insideLeft', style: { fontSize: '0.75rem', fill: '#6b7280' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [`${value}%`, 'Utilization']}
            />
            <Bar dataKey="utilization" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-legend">
        {data.map((item, index) => (
          <div key={item.name} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: colors[index % colors.length] }}></div>
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">{item.utilization}% ({item.capacity} spaces)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceUtilizationChart;



