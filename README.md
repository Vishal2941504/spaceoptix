# SpaceOptix – Intelligent Space Utilization Analytics Platform

A React-based web application that simulates an AI-powered workspace analytics dashboard for facilities and real estate optimization.

## Overview

SpaceOptix is a smart facilities and real estate optimization platform designed for offices, corporate campuses, and co-working environments. The application simulates an AI-driven system that analyzes occupancy data from sensors and cameras to surface actionable insights for workspace planning.

## Features

- **Real-time Analytics Dashboard**: View space usage trends across the day with interactive charts
- **AI-Powered Insights**: Receive intelligent optimization recommendations with impact levels and cost savings estimates
- **Multi-Dimensional Analysis**: Filter by building, floor, space type, and time range
- **Visual Heatmaps**: Zone-level utilization visualization showing overutilized, optimally used, and underutilized areas
- **Key Performance Indicators**: Track total spaces, utilization rates, cost savings, and optimization confidence
- **Professional Enterprise UI**: Modern, clean design suitable for corporate stakeholders

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd Spaceoptix
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

The application will automatically reload when you make changes to the code.

## Project Structure

```
Spaceoptix/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── ControlsPanel.js
│   │   ├── OccupancyStatusCards.js
│   │   ├── TimeSeriesChart.js
│   │   ├── SpaceUtilizationChart.js
│   │   ├── HeatmapSection.js
│   │   ├── RecommendationsPanel.js
│   │   └── MetricsCards.js
│   ├── utils/
│   │   └── mockData.js     # Mock data generation utilities
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Usage

### Running Analysis

1. Use the left control panel to select:
   - **Building**: Choose from available buildings
   - **Floor**: Select a specific floor
   - **Space Type**: Filter by Desks, Meeting Rooms, or Collaboration Zones
   - **Time Range**: Choose Morning, Afternoon, or Full Day

2. Click **"Run AI Analysis"** to generate fresh analytics and recommendations

3. View the results in the main dashboard:
   - **Occupancy Status Cards**: Current occupancy level, peak usage time, average utilization, and data freshness
   - **Time-Series Chart**: Hourly space usage trends
   - **Space Utilization Chart**: Breakdown by space type
   - **Heatmap**: Zone-level activity visualization
   - **AI Recommendations**: Intelligent optimization insights with impact levels and savings estimates
   - **Metrics Summary**: Key performance indicators

### Understanding the Data

- **Mock Data**: This application uses simulated data to demonstrate the analytics capabilities. In a production environment, this would connect to real occupancy sensors and camera systems.

- **AI Recommendations**: The recommendations are generated algorithmically based on utilization patterns. Each recommendation includes:
  - Impact level (High/Medium/Low)
  - Estimated monthly cost savings
  - Confidence score (percentage)

## Technologies Used

- **React 18**: Modern React with functional components and hooks
- **Recharts**: Charting library for data visualization
- **Lucide React**: Icon library for modern UI elements
- **CSS3**: Custom styling with modern design patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner

### Customization

You can customize the application by:

- Modifying mock data generation in `src/utils/mockData.js`
- Adjusting styling in component CSS files
- Adding new components in `src/components/`
- Extending the analytics logic in `src/App.js`

## Notes

- This is a **frontend-only simulation** with no backend or real sensor integration
- All data is generated client-side using mock data utilities
- The application is designed for demonstration and academic purposes
- For production use, integrate with real occupancy sensors and camera analytics systems

## License

This project is created for academic and demonstration purposes.

---

**SpaceOptix** - AI-Powered Space Optimization Dashboard



