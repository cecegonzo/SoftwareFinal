import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: '/Pin.png', // Custom pin image in the public folder
  iconSize: [25, 30],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Array of locations
const locations = [
  {
    name: 'UT Physicians Plastic Surgery II Texas Medical Center',
    position: [29.7102, -95.4007],
    url: 'https://utphysicians.com/clinic/ut-physicians-plastic-surgery-ii-texas-medical-center/',
  },
  {
    name: 'Village Medical',
    position: [29.7746, -95.4094],
    url: 'https://www.villagemedical.com',
  },
  {
    name: 'Planned Parenthood Gulf',
    position: [29.7145, -95.3089],
    url: 'http://www.outsmartmagazine.com/2019/11/planned-parenthood-gulf-coast-expands-trans-healthcare/',
  },
  {
    name: 'Legacy Community Health',
    position: [29.7499, -95.3866],
    url: 'https://www.legacycommunityhealth.org/',
  },
  {
    name: 'Southwest Family Medicine Associates',
    position: [32.8366, -96.8727],
    url: 'https://www.southwestfamilymed.com/',
  },
  {
    name: 'Planned Parenthood North Dallas',
    position: [32.8821, -96.7699],
    url: 'https://www.plannedparenthood.org/health-center/texas/dallas/75231/north-dallas-shelburne-health-center-2521-91620?utm_campaign=north-dallas-shelburne-health-center&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Planned Parenthood South Dallas',
    position: [32.6518, -96.8765],
    url: 'https://www.plannedparenthood.org/health-center/texas/dallas/75237/south-dallas-abortion-services-center-4149-91620?utm_campaign=south-dallas-abortion-services-center&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Planned Parenthood Arlington',
    position: [32.6785, -97.1161],
    url: 'https://www.plannedparenthood.org/health-center/texas/arlington/76015/arlington-health-center-2244-91620?utm_campaign=arlington-health-center&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Planned Parenthood Denton',
    position: [33.1868, -97.1043],
    url: 'https://www.plannedparenthood.org/health-center/texas/denton/76205/denton-health-center-2190-91620?utm_campaign=denton-health-center&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Kind Clinic',
    position: [30.3695, -97.7431],
    url: 'https://kindclinic.org/',
  },
  {
    name: 'Kind Clinic Austin',
    position: [30.3189, -97.7207],
    url: 'https://kindclinic.org/',
  },
  {
    name: 'Freeman Medical Clinic',
    position: [30.2727, -97.7622],
    url: 'https://www.freemanmedicalclinic.com/',
  },
  {
    name: 'Kind Clinic San Antonio',
    position: [29.5462, -98.4888],
    url: 'https://kindclinic.org/',
  },
  {
    name: 'Planned Parenthood South Texas Medical Center',
    position: [29.5117, -98.5777],
    url: 'https://www.plannedparenthood.org/health-center/texas/san-antonio/78229/planned-parenthood-south-texas-medical-center-2967-91710?utm_campaign=planned-parenthood-south-texas-medical-center&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Planned Parenthood San Pedro',
    position: [29.4406, -98.4923],
    url: 'https://www.plannedparenthood.org/health-center/texas/san-antonio/78212/planned-parenthood-san-pedro-4248-91710?utm_campaign=planned-parenthood-san-pedro&utm_medium=organic&utm_source=local-listing',
  },
  {
    name: 'Planned Parenthood Marbach Road Health Center',
    position: [29.4008, -98.6618],
    url: 'https://www.plannedparenthood.org/health-center/texas/san-antonio/78245/planned-parenthood-richland-hills-dr-2965-91710?utm_campaign=planned-parenthood-richland-hills-dr&utm_medium=organic&utm_source=local-listing',
  },
];

const Map = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="map-container" style={{ height: '80vh', margin: '80px' }}>
        <MapContainer
          center={[29.7604, -95.3698]} // Center map on Houston
          zoom={8} // Zoom to include all locations
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Dynamically create markers from the locations array */}
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              icon={customIcon}
              eventHandlers={{
                click: () => {
                  window.open(location.url, '_blank');
                },
              }}
            >
              <Popup>
                <a
                  href={location.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location.name}
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Map;