import React  from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
// import './styles.css';

const Maps = ({position=[] , isDashboard= false}) => {
  return (
    <div className={` block  items-center justify-center ${isDashboard ? "h-[150px]" : "h-[100%]"} w-[100%] overflow-hidden`}>
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
