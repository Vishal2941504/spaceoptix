import React from 'react';
import './RecommendationsPanel.css';
import { Brain, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';
import { sanitizeString } from '../utils/security';

const RecommendationsPanel = ({ recommendations }) => {
  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High':
        return '#ef4444';
      case 'Medium':
        return '#f59e0b';
      case 'Low':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const getImpactBgColor = (impact) => {
    switch (impact) {
      case 'High':
        return '#fee2e2';
      case 'Medium':
        return '#fef3c7';
      case 'Low':
        return '#f3f4f6';
      default:
        return '#f3f4f6';
    }
  };

  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <div className="header-icon">
          <Brain size={24} />
        </div>
        <div>
          <h3>AI Optimization Insights</h3>
          <p className="chart-subtitle">Intelligent recommendations based on occupancy patterns</p>
        </div>
      </div>
      <div className="recommendations-list">
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="recommendation-header">
              <div className="recommendation-title-section">
                <h4 className="recommendation-title">{rec.title}</h4>
                <div 
                  className="impact-badge"
                  style={{ 
                    backgroundColor: getImpactBgColor(rec.impact),
                    color: getImpactColor(rec.impact)
                  }}
                >
                  <AlertCircle size={14} />
                  <span>{rec.impact} Impact</span>
                </div>
              </div>
            </div>
            <p className="recommendation-description">{sanitizeString(rec.description)}</p>
            <div className="recommendation-footer">
              <div className="recommendation-metric">
                <DollarSign size={16} />
                <span className="metric-label">Estimated Savings:</span>
                <span className="metric-value">{rec.savings}</span>
              </div>
              <div className="recommendation-metric">
                <TrendingUp size={16} />
                <span className="metric-label">Confidence:</span>
                <span className="metric-value">{rec.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;

