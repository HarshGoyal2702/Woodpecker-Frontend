import React  from "react";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

const Maps = () => {
  return (
    <div className=" block  items-center justify-center h-[450px] w-[100%] overflow-hidden">
      <MapContainer center={[0,0]} zoom={1} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0,0]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
