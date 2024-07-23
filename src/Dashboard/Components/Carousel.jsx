import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";  // Ensure the import is correct

const Data = [
  {
    location: "Mumbai",
    coordinates: [19.0760, 72.8777],
    weather: "Heavy Rainfall",
    last_disaster: {
      type: "Flood",
      date: "July 2023",
    },
  },
  {
    location: "Chennai",
    coordinates: [13.0827, 80.2707],
    weather: "Humid",
    last_disaster: {
      type: "Flood",
      date: "December 2015",
    },
  },
  {
    location: "Delhi",
    coordinates: [28.7041, 77.1025],
    weather: "Hot and Dry",
    last_disaster: {
      type: "Heatwave",
      date: "June 2024",
    },
  },
  {
    location: "Kolkata",
    coordinates: [22.5726, 88.3639],
    weather: "Moderate Rainfall",
    last_disaster: {
      type: "Cyclone",
      date: "May 2020",
    },
  },
  {
    location: "Hyderabad",
    coordinates: [17.3850, 78.4867],
    weather: "Partly Cloudy",
    last_disaster: {
      type: "Flood",
      date: "October 2020",
    },
  },
  {
    location: "Bangalore",
    coordinates: [12.9716, 77.5946],
    weather: "Moderate Rainfall",
    last_disaster: {
      type: "Flood",
      date: "September 2022",
    },
  },
  {
    location: "Ahmedabad",
    coordinates: [23.0225, 72.5714],
    weather: "Hot and Dry",
    last_disaster: {
      type: "Heatwave",
      date: "May 2022",
    },
  },
  {
    location: "Pune",
    coordinates: [18.5204, 73.8567],
    weather: "Light Rainfall",
    last_disaster: {
      type: "Flood",
      date: "August 2019",
    },
  },
  {
    location: "Lucknow",
    coordinates: [26.8467, 80.9462],
    weather: "Humid",
    last_disaster: {
      type: "Flood",
      date: "September 2021",
    },
  },
  {
    location: "Patna",
    coordinates: [25.5941, 85.1376],
    weather: "Heavy Rainfall",
    last_disaster: {
      type: "Flood",
      date: "July 2023",
    },
  },
];


const Carousel = () => (
  <div className="my-[30px] py-9 carousel-card bg-blue-100 p-6 rounded-lg shadow-lg">
    <Marquee pauseOnHover={true} speed={100}>
      {Data.map((item, index) => (
        <Card
          key={index}
          location={item.location}
          weather={item.weather}
          coordinates={item.coordinates}
          last_disaster={item.last_disaster}
        />
      ))}
    </Marquee>
  </div>
);

export default Carousel;
