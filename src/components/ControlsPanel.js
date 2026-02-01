import React from 'react';
import './ControlsPanel.css';
import { Building, Layers, Clock, Play, Info } from 'lucide-react';
import { BUILDINGS, FLOORS, SPACE_TYPES, TIME_RANGES } from '../utils/mockData';

const ControlsPanel = ({ 
  selectedBuilding, 
  selectedFloor, 
  selectedSpaceType, 
  selectedTimeRange,
  onBuildingChange,
  onFloorChange,
  onSpaceTypeChange,
  onTimeRangeChange,
  onRunAnalysis 
}) => {
  return (
    <div className="controls-panel">
      <div className="controls-header">
        <h2>Space Controls</h2>
        <p className="controls-subtitle">Configure your analysis parameters</p>
      </div>

      <div className="controls-content">
        <div className="control-group">
          <label className="control-label">
            <Building size={18} />
            <span>Building</span>
          </label>
          <select 
            className="control-select"
            value={selectedBuilding}
            onChange={(e) => onBuildingChange(e.target.value)}
          >
            {BUILDINGS.map(building => (
              <option key={building} value={building}>{building}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label className="control-label">
            <Layers size={18} />
            <span>Floor</span>
          </label>
          <select 
            className="control-select"
            value={selectedFloor}
            onChange={(e) => onFloorChange(e.target.value)}
          >
            {FLOORS.map(floor => (
              <option key={floor} value={floor}>{floor}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label className="control-label">
            <Clock size={18} />
            <span>Space Type</span>
          </label>
          <select 
            className="control-select"
            value={selectedSpaceType}
            onChange={(e) => onSpaceTypeChange(e.target.value)}
          >
            {SPACE_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label className="control-label">
            <Clock size={18} />
            <span>Time Range</span>
          </label>
          <select 
            className="control-select"
            value={selectedTimeRange}
            onChange={(e) => onTimeRangeChange(e.target.value)}
          >
            {TIME_RANGES.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <button 
          className="analyze-button"
          onClick={onRunAnalysis}
        >
          <Play size={20} />
          <span>Run AI Analysis</span>
        </button>

        <div className="info-box">
          <Info size={18} />
          <div className="info-content">
            <p className="info-title">Data Sources</p>
            <p className="info-text">
              Insights are generated from occupancy sensors and camera analytics 
              deployed across the workspace. Data is updated in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsPanel;



