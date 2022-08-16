import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({ iconUrl: "static/marker-icon.png" });

const Map = ({ coordinates }) => (
  <MapContainer
    center={coordinates}
    zoom={16}
    scrollWheelZoom
    style={{ width: "100%", height: "25rem" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coordinates} icon={icon}></Marker>
  </MapContainer>
);

export default Map;
