import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Chart } from 'react-google-charts';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const geocodeLocation = async (location) => {
  // Dummy function to simulate geocoding API call
  // Replace with actual geocoding API call if needed
  const coordinates = {
    "New York": { lat: 40.7128, lng: -74.0060 },
    "Los Angeles": { lat: 34.0522, lng: -118.2437 },
    "Chicago": { lat: 41.8781, lng: -87.6298 },
    "Delhi": { lat: 28.6139, lng: 77.2090 },
    "Mumbai": { lat: 19.0760, lng: 72.8777 },
    "Bangalore": { lat: 12.9716, lng: 77.5946 },
    "Chennai": { lat: 13.0827, lng: 80.2707 },
    "Kolkata": { lat: 22.5726, lng: 88.3639 },
    "Hyderabad": { lat: 17.3850, lng: 78.4867 },
    "Pune": { lat: 18.5204, lng: 73.8567 },
    "Jaipur": { lat: 26.9124, lng: 75.7873 },
    "Ahmedabad": { lat: 23.0225, lng: 72.5714 },
    "Surat": { lat: 21.1702, lng: 72.8311 },
    "Lucknow": { lat: 26.8467, lng: 80.9462 },
    "Kanpur": { lat: 26.4499, lng: 80.3319 },
    "Nagpur": { lat: 21.1458, lng: 79.0882 },
    "Indore": { lat: 22.7196, lng: 75.8577 },
    "Bhopal": { lat: 23.2599, lng: 77.4126 },
    "Patna": { lat: 25.5941, lng: 85.1376 },
    "Ludhiana": { lat: 30.9010, lng: 75.8573 },
    "Agra": { lat: 27.1767, lng: 78.0081 },
  };
  
  return coordinates[location] || { lat: 0, lng: 0 };
};

const generateDataForLocation = (location) => {
    const lineChartData = {
      "New York": { x: [1, 2, 3, 4, 5, 6], y: [3, 6, 9, 12, 15, 18] },
      "Los Angeles": { x: [1, 2, 3, 4, 5, 6], y: [2, 4, 8, 16, 32, 64] },
      "Chicago": { x: [1, 2, 3, 4, 5, 6], y: [5, 10, 15, 20, 25, 30] },
      "Delhi": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] },
      "Mumbai": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] },
      "Bangalore": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] },
      "Chennai": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [2, 6, 12, 20, 30, 42, 56, 72, 90, 110] },
      "Kolkata": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [3, 8, 15, 24, 35, 48, 63, 80, 99, 120] },
      "Hyderabad": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [1, 3, 6, 10, 15, 21, 28, 36, 45, 55] },
      "Pune": { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], y: [2, 4, 7, 11, 16, 22, 29, 37, 46, 56] },
    };
  
    const pieChartData = {
      "New York": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 7],
        ["Earthquake", 2],
        ["Hurricane", 5],
        ["Wildfire", 1],
        ["Tornado", 3],
      ],
      "Los Angeles": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 2],
        ["Earthquake", 7],
        ["Hurricane", 1],
        ["Wildfire", 6],
        ["Tornado", 2],
      ],
      "Chicago": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 5],
        ["Earthquake", 3],
        ["Hurricane", 2],
        ["Wildfire", 1],
        ["Tornado", 4],
      ],
      "Delhi": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 4],
        ["Earthquake", 3],
        ["Hurricane", 2],
        ["Wildfire", 5],
        ["Tornado", 1],
      ],
      "Mumbai": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 6],
        ["Earthquake", 1],
        ["Hurricane", 2],
        ["Wildfire", 4],
        ["Tornado", 3],
      ],
      "Bangalore": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 3],
        ["Earthquake", 4],
        ["Hurricane", 2],
        ["Wildfire", 5],
        ["Tornado", 1],
      ],
      "Chennai": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 5],
        ["Earthquake", 2],
        ["Hurricane", 3],
        ["Wildfire", 4],
        ["Tornado", 1],
      ],
      "Kolkata": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 6],
        ["Earthquake", 3],
        ["Hurricane", 1],
        ["Wildfire", 2],
        ["Tornado", 4],
      ],
      "Hyderabad": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 2],
        ["Earthquake", 4],
        ["Hurricane", 3],
        ["Wildfire", 5],
        ["Tornado", 1],
      ],
      "Pune": [
        ["Disaster Type", "Occurrences"],
        ["Flood", 4],
        ["Earthquake", 5],
        ["Hurricane", 2],
        ["Wildfire", 1],
        ["Tornado", 3],
      ],
    };
  return {
    lineChart: lineChartData[location] || { x: [], y: [] },
    pieChart: pieChartData[location] || [["Disaster Type", "Occurrences"], ["None", 0]],
  };
};

const options = {
  title: "Disaster Occurrences",
  is3D: true,
  animation: {
    startup: true,
    easing: 'linear',
    duration: 1500,
  },
};

const DisasterPrediction = () => {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const [showGraphs, setShowGraphs] = useState(false);
  const [lineChartData, setLineChartData] = useState({ x: [], y: [] });
  const [pieChartData, setPieChartData] = useState([["Disaster Type", "Occurrences"], ["None", 0]]);

  useEffect(() => {
    if (location) {
      geocodeLocation(location).then((coords) => {
        setCoordinates(coords);
      });
    }
  }, [location]);

  const handlePredict = () => {
    if (location) {
      const data = generateDataForLocation(location);
      setLineChartData(data.lineChart);
      setPieChartData(data.pieChart);
      setShowGraphs(true);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <h2>Disaster Prediction</h2>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
        <TextField
          label="Location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <TextField
          label="Latitude"
          variant="outlined"
          value={coordinates.lat}
          disabled
          fullWidth
        />
        <TextField
          label="Longitude"
          variant="outlined"
          value={coordinates.lng}
          disabled
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
        <Button variant="contained" color="primary" onClick={handlePredict}>
          Predict Disaster
        </Button>
      </Box>
      {showGraphs ? (
        <Box className="flex w-[1500px] gap-3 items-start border">
          <LineChart
            xAxis={[{ data: lineChartData.x }]}
            series={[{ data: lineChartData.y }]}
            width={400}
            height={350}
            options={{
              animation: {
                startup: true,
                easing: 'linear',
                duration: 1500,
              },
            }}
            className='-ml-[100px]'
          />
          <Chart
            chartType="PieChart"
            data={pieChartData}
            options={options}
            width={"600px"}
            height={"400px"}
          />
        </Box>
      ) : (
        <Box sx={{ height: 350 }} />
      )}
    </Box>
  );
}

export default DisasterPrediction;
