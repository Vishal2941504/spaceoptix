import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import OccupancyStatusCards from './components/OccupancyStatusCards';
import TimeSeriesChart from './components/TimeSeriesChart';
import SpaceUtilizationChart from './components/SpaceUtilizationChart';
import HeatmapSection from './components/HeatmapSection';
import RecommendationsPanel from './components/RecommendationsPanel';
import MetricsCards from './components/MetricsCards';
import {
  generateHourlyData,
  generateSpaceUtilization,
  generateRecommendations,
  generateHeatmapZones,
  getOccupancyStatus,
  getPeakUsageTime,
  calculateAverageUtilization,
  calculateMetrics,
  BUILDINGS,
  FLOORS,
  SPACE_TYPES,
  TIME_RANGES,
} from './utils/mockData';
import {
  validateBuilding,
  validateFloor,
  validateSpaceType,
  validateTimeRange,
} from './utils/security';

function App() {
  const [selectedBuilding, setSelectedBuilding] = useState(BUILDINGS[0]);
  const [selectedFloor, setSelectedFloor] = useState(FLOORS[0]);
  const [selectedSpaceType, setSelectedSpaceType] = useState(SPACE_TYPES[0]);
  const [selectedTimeRange, setSelectedTimeRange] = useState(TIME_RANGES[2]);
  
  const [hourlyData, setHourlyData] = useState([]);
  const [spaceUtilization, setSpaceUtilization] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [heatmapZones, setHeatmapZones] = useState([]);
  const [metrics, setMetrics] = useState({
    totalSpaces: 0,
    avgUtilization: 0,
    monthlySavings: 0,
    confidenceScore: 0,
  });
  const [lastUpdated, setLastUpdated] = useState('Just now');

  // Initialize data on component mount
  useEffect(() => {
    runAnalysis();
  }, []);

  const runAnalysis = () => {
    // Generate fresh data
    const newHourlyData = generateHourlyData(selectedTimeRange);
    const newSpaceUtilization = generateSpaceUtilization();
    const newRecommendations = generateRecommendations();
    const newHeatmapZones = generateHeatmapZones();
    
    // Calculate metrics
    const newMetrics = calculateMetrics(newHourlyData, newSpaceUtilization);
    
    // Update state
    setHourlyData(newHourlyData);
    setSpaceUtilization(newSpaceUtilization);
    setRecommendations(newRecommendations);
    setHeatmapZones(newHeatmapZones);
    setMetrics(newMetrics);
    
    // Update timestamp
    const now = new Date();
    const minutesAgo = Math.floor(Math.random() * 5) + 1;
    setLastUpdated(`${minutesAgo} min${minutesAgo > 1 ? 's' : ''} ago`);
  };

  // Calculate derived values for status cards
  const avgUtilization = calculateAverageUtilization(hourlyData);
  const occupancyStatus = getOccupancyStatus(avgUtilization);
  const peakTime = getPeakUsageTime(hourlyData);

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <aside className="sidebar">
          <ControlsPanel
            selectedBuilding={selectedBuilding}
            selectedFloor={selectedFloor}
            selectedSpaceType={selectedSpaceType}
            selectedTimeRange={selectedTimeRange}
            onBuildingChange={(value) => setSelectedBuilding(validateBuilding(value))}
            onFloorChange={(value) => setSelectedFloor(validateFloor(value))}
            onSpaceTypeChange={(value) => setSelectedSpaceType(validateSpaceType(value))}
            onTimeRangeChange={(value) => setSelectedTimeRange(validateTimeRange(value))}
            onRunAnalysis={runAnalysis}
          />
        </aside>
        <main className="main-content">
          <div className="dashboard-section">
            <MetricsCards metrics={metrics} />
          </div>
          
          <div className="dashboard-section">
            <OccupancyStatusCards
              status={occupancyStatus}
              peakTime={peakTime}
              avgUtilization={avgUtilization}
              lastUpdated={lastUpdated}
            />
          </div>

          <div className="dashboard-section">
            <TimeSeriesChart data={hourlyData} />
          </div>

          <div className="dashboard-section">
            <SpaceUtilizationChart data={spaceUtilization} />
          </div>

          <div className="dashboard-section">
            <HeatmapSection zones={heatmapZones} />
          </div>

          <div className="dashboard-section">
            <RecommendationsPanel recommendations={recommendations} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

