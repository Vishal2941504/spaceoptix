// Mock data generator for SpaceOptix analytics

const BUILDINGS = ['Corporate Tower A', 'Innovation Hub B', 'Executive Center C'];
const FLOORS = ['Ground Floor', 'Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'];
const SPACE_TYPES = ['Desks', 'Meeting Rooms', 'Collaboration Zones'];
const TIME_RANGES = ['Morning', 'Afternoon', 'Full Day'];

// Generate hourly occupancy data
export const generateHourlyData = (timeRange = 'Full Day') => {
  const hours = [];
  let startHour = 0;
  let endHour = 23;

  if (timeRange === 'Morning') {
    startHour = 6;
    endHour = 12;
  } else if (timeRange === 'Afternoon') {
    startHour = 12;
    endHour = 18;
  }

  for (let hour = startHour; hour <= endHour; hour++) {
    // Simulate realistic office usage patterns
    let baseUsage = 0;
    if (hour >= 6 && hour < 9) {
      baseUsage = 20 + (hour - 6) * 15; // Morning ramp-up
    } else if (hour >= 9 && hour < 12) {
      baseUsage = 65 + Math.random() * 20; // Peak morning
    } else if (hour >= 12 && hour < 14) {
      baseUsage = 40 + Math.random() * 15; // Lunch dip
    } else if (hour >= 14 && hour < 17) {
      baseUsage = 70 + Math.random() * 15; // Afternoon peak
    } else if (hour >= 17 && hour < 20) {
      baseUsage = 50 - (hour - 17) * 10; // Evening wind-down
    } else {
      baseUsage = 5 + Math.random() * 10; // Off-hours
    }

    hours.push({
      hour: hour,
      label: `${hour}:00`,
      occupancy: Math.round(Math.max(0, Math.min(100, baseUsage + (Math.random() * 10 - 5)))),
    });
  }

  return hours;
};

// Generate space utilization by type
export const generateSpaceUtilization = () => {
  return SPACE_TYPES.map(type => ({
    name: type,
    utilization: Math.round(40 + Math.random() * 40),
    capacity: type === 'Desks' ? 150 : type === 'Meeting Rooms' ? 25 : 12,
  }));
};

// Generate AI recommendations
export const generateRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Consolidate Underutilized Desk Areas',
      description: 'Floors 2-3 show 35% average utilization. Consider consolidating 40 desks to create collaboration zones.',
      impact: 'High',
      savings: '$12,500/month',
      confidence: 92,
    },
    {
      id: 2,
      title: 'Optimize Meeting Room Scheduling',
      description: 'Peak demand (10-11 AM, 2-3 PM) exceeds capacity. Implement staggered scheduling and room booking policies.',
      impact: 'High',
      savings: '$8,200/month',
      confidence: 88,
    },
    {
      id: 3,
      title: 'Convert Unused Spaces to Collaboration Zones',
      description: 'Three meeting rooms show <20% utilization. Convert to flexible collaboration spaces for better ROI.',
      impact: 'Medium',
      savings: '$4,800/month',
      confidence: 75,
    },
    {
      id: 4,
      title: 'Implement Hot-Desking for Remote Workers',
      description: 'Desk utilization peaks at 65% but many desks remain empty. Hot-desking can reduce space needs by 30%.',
      impact: 'Medium',
      savings: '$6,100/month',
      confidence: 82,
    },
  ];

  // Shuffle and return 3-4 recommendations
  return recommendations.sort(() => Math.random() - 0.5).slice(0, 3 + Math.floor(Math.random() * 2));
};

// Calculate occupancy status
export const getOccupancyStatus = (utilization) => {
  if (utilization < 40) return { level: 'Low', color: '#10b981' };
  if (utilization < 70) return { level: 'Medium', color: '#f59e0b' };
  return { level: 'High', color: '#ef4444' };
};

// Get peak usage time
export const getPeakUsageTime = (hourlyData) => {
  if (!hourlyData || hourlyData.length === 0) return 'N/A';
  const peak = hourlyData.reduce((max, item) => 
    item.occupancy > max.occupancy ? item : max
  );
  return peak.label;
};

// Calculate average utilization
export const calculateAverageUtilization = (hourlyData) => {
  if (!hourlyData || hourlyData.length === 0) return 0;
  const sum = hourlyData.reduce((acc, item) => acc + item.occupancy, 0);
  return Math.round(sum / hourlyData.length);
};

// Generate heatmap zones
export const generateHeatmapZones = () => {
  return [
    { zone: 'Zone A - North Wing', status: 'Overutilized', utilization: 85 },
    { zone: 'Zone B - Central Hub', status: 'Optimally Used', utilization: 68 },
    { zone: 'Zone C - South Wing', status: 'Underutilized', utilization: 32 },
    { zone: 'Zone D - East Corridor', status: 'Optimally Used', utilization: 72 },
    { zone: 'Zone E - West Corridor', status: 'Underutilized', utilization: 28 },
  ];
};

// Calculate metrics
export const calculateMetrics = (hourlyData, spaceUtilization) => {
  const totalSpaces = spaceUtilization.reduce((sum, space) => sum + space.capacity, 0);
  const avgUtilization = calculateAverageUtilization(hourlyData);
  const monthlySavings = Math.round(15000 + Math.random() * 10000);
  const confidenceScore = Math.round(75 + Math.random() * 20);

  return {
    totalSpaces,
    avgUtilization,
    monthlySavings,
    confidenceScore,
  };
};

export { BUILDINGS, FLOORS, SPACE_TYPES, TIME_RANGES };



