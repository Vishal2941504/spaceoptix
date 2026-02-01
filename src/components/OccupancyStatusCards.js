import React from 'react';
import './OccupancyStatusCards.css';
import { TrendingUp, Clock, BarChart3, RefreshCw } from 'lucide-react';

const OccupancyStatusCards = ({ status, peakTime, avgUtilization, lastUpdated }) => {
  return (
    <div className="occupancy-cards">
      <div className="status-card">
        <div className="card-icon" style={{ backgroundColor: `${status.color}15`, color: status.color }}>
          <BarChart3 size={24} />
        </div>
        <div className="card-content">
          <p className="card-label">Current Occupancy</p>
          <p className="card-value" style={{ color: status.color }}>
            {status.level}
          </p>
        </div>
      </div>

      <div className="status-card">
        <div className="card-icon" style={{ backgroundColor: '#3b82f615', color: '#3b82f6' }}>
          <TrendingUp size={24} />
        </div>
        <div className="card-content">
          <p className="card-label">Peak Usage Time</p>
          <p className="card-value">{peakTime}</p>
        </div>
      </div>

      <div className="status-card">
        <div className="card-icon" style={{ backgroundColor: '#10b98115', color: '#10b981' }}>
          <BarChart3 size={24} />
        </div>
        <div className="card-content">
          <p className="card-label">Average Utilization</p>
          <p className="card-value">{avgUtilization}%</p>
        </div>
      </div>

      <div className="status-card">
        <div className="card-icon" style={{ backgroundColor: '#6b728015', color: '#6b7280' }}>
          <RefreshCw size={24} />
        </div>
        <div className="card-content">
          <p className="card-label">Data Freshness</p>
          <p className="card-value">{lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default OccupancyStatusCards;



