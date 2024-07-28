import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const DisasterPrediction = () => {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' });
  const [showGraphs, setShowGraphs] = useState(false);
  const [lineChartData, setLineChartData] = useState({ x: [], y: [] });
  const [pieChartData, setPieChartData] = useState([["Disaster Type", "Occurrences"], ["None", 0]]);

  useEffect(() => {
    if (location) {
      const fetchDisasterData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/disaster/search/rohtak`);
          console.log(response);

          const data = response.data;
          setCoordinates({ lat: data.weather.lat, lng: data.weather.lon });
          setLineChartData({ x: data.lineChart.x, y: data.lineChart.y });
          // const data = response.data;
          const obj = data.weather.weather
          // setCoordinates({ lat: data.weather.lat, lng: data.weather.lon });
          setPieChartData(obj);
          setShowGraphs(true);
        } catch (error) {
          console.error('Error fetching bakwaas dimaag kharab ho gya h disaster data:', error);
        }
      };

      fetchDisasterData();
    }
  },location);

  const handlePredict = () => {
    if (location) {
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
            options={{
              title: "Disaster Occurrences",
              is3D: true,
              animation: {
                startup: true,
                easing: 'linear',
                duration: 1500,
              },
            }}
            width={"600px"}
            height={"400px"}
          />
        </Box>
      ) : (
        <Box sx={{ height: 350 }} />
      )}
    </Box>
  );
};

export default DisasterPrediction;
