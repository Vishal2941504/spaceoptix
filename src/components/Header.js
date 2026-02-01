import React from 'react';
import './Header.css';
import { Activity, Brain } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-brand">
          <div className="brand-icon">
            <Activity size={32} />
          </div>
          <div className="brand-text">
            <h1 className="app-title">SpaceOptix</h1>
            <p className="app-subtitle">AI-Powered Space Optimization Dashboard</p>
          </div>
        </div>
        <div className="header-badge">
          <Brain size={18} />
          <span>AI Analytics Active</span>
        </div>
      </div>
    </header>
  );
};

export default Header;



