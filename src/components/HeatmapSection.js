import React from 'react';
import './HeatmapSection.css';
import { MapPin } from 'lucide-react';

const HeatmapSection = ({ zones }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Overutilized':
        return '#ef4444';
      case 'Optimally Used':
        return '#10b981';
      case 'Underutilized':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Overutilized':
        return '#fee2e2';
      case 'Optimally Used':
        return '#d1fae5';
      case 'Underutilized':
        return '#fef3c7';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="heatmap-container">
      <div className="chart-header">
        <h3>Floor Activity Heatmap</h3>
        <p className="chart-subtitle">Zone-level utilization visualization</p>
      </div>
      <div className="heatmap-grid">
        {zones.map((zone, index) => (
          <div 
            key={index} 
            className="heatmap-zone"
            style={{ 
              backgroundColor: getStatusBgColor(zone.status),
              borderLeft: `4px solid ${getStatusColor(zone.status)}`
            }}
          >
            <div className="zone-header">
              <MapPin size={18} style={{ color: getStatusColor(zone.status) }} />
              <span className="zone-name">{zone.zone}</span>
            </div>
            <div className="zone-status" style={{ color: getStatusColor(zone.status) }}>
              {zone.status}
            </div>
            <div className="zone-utilization">
              {zone.utilization}% Utilization
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeatmapSection;



