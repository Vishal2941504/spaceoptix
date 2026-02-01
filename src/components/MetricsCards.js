import React from 'react';
import './MetricsCards.css';
import { Building2, BarChart3, DollarSign, Target } from 'lucide-react';

const MetricsCards = ({ metrics }) => {
  const metricItems = [
    {
      icon: Building2,
      label: 'Total Spaces Monitored',
      value: metrics.totalSpaces,
      unit: 'spaces',
      color: '#3b82f6',
    },
    {
      icon: BarChart3,
      label: 'Average Utilization Rate',
      value: metrics.avgUtilization,
      unit: '%',
      color: '#10b981',
    },
    {
      icon: DollarSign,
      label: 'Estimated Monthly Savings',
      value: `$${metrics.monthlySavings.toLocaleString()}`,
      unit: '',
      color: '#f59e0b',
    },
    {
      icon: Target,
      label: 'Optimization Confidence',
      value: metrics.confidenceScore,
      unit: '%',
      color: '#8b5cf6',
    },
  ];

  return (
    <div className="metrics-container">
      <div className="metrics-grid">
        {metricItems.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon" style={{ backgroundColor: `${metric.color}15`, color: metric.color }}>
              <metric.icon size={24} />
            </div>
            <div className="metric-content">
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">
                {metric.value}
                {metric.unit && <span className="metric-unit">{metric.unit}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsCards;



