import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/pin.png',
  iconSize: [25, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    const addMarkerByAddress = () => {
      const name = 'UT Physicians Plastic Surgery II Texas Medical Center';
      setMarkerPosition({
        position: [29.7102, -95.4007], // Hardcoded coordinates for testing
        name: name,
      });
    };

    addMarkerByAddress();
  }, []);

  return (
    <div className="bg-white">
      <Navbar /> 
      <div className="map-container" style={{ height: '90vh', margin: '90px'}}>  {/* Hol adjusted the size of the map*/}
        <MapContainer center={[29.7102, -95.4007]} zoom={15} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {markerPosition && (
            <Marker
              position={markerPosition.position}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  window.open('https://utphysicians.com/clinic/ut-physicians-plastic-surgery-ii-texas-medical-center/', '_blank');
                },
              }}
            >
              <Popup>
                <a
                  href="https://utphysicians.com/clinic/ut-physicians-plastic-surgery-ii-texas-medical-center/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit UT Physicians Plastic Surgery
                </a>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Map;