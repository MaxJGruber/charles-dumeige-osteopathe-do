import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({ iconUrl: "/static/marker-icon.png" });

// Scroll-wheel zoom is off so the map does not swallow the page scroll as the
// reader passes over it; dragging and the +/- controls still work.
const Map = ({ coordinates }) => (
  <MapContainer
    center={coordinates}
    zoom={16}
    scrollWheelZoom={false}
    style={{ width: "100%", height: "100%", minHeight: "26rem" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={coordinates} icon={icon} />
  </MapContainer>
);

export default Map;
