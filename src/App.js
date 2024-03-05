import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import RideOptions from "./components/RideOptions";
import PickupForm from "./components/PickupForm";
import ConfirmationContainer from "./components/ConfirmationContainer";
import L from "leaflet";
import pickupIconUrl from "./location-icon.png";
import dropIconUrl from "./location-icon.png";
import './App.css';

const pickupIcon = new L.Icon({
  iconUrl: pickupIconUrl,
  iconSize: [38, 38],
});

const dropIcon = new L.Icon({
  iconUrl: dropIconUrl,
  iconSize: [38, 38],
});

function App() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [seats, setSeats] = useState("");
  const [rideOptions, setRideOptions] = useState([]);
  const [selectedRideOption, setSelectedRideOption] = useState(null);
  const [showRideOptions, setShowRideOptions] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);

  const findRide = () => {
    const mockRideOptions = [
      { vehicleNumber: "ABC123", vehicleInfo: "Toyota Camry", amount: "$20", imageSrc: "toyota_camry_image_url.jpg" },
      { vehicleNumber: "XYZ456", vehicleInfo: "Honda Civic", amount: "$15", imageSrc: "toyota_camry_image_url.jpg" },
      { vehicleNumber: "DEF789", vehicleInfo: "Ford Mustang", amount: "$25", imageSrc: "toyota_camry_image_url.jpg" },
    ];
    setRideOptions(mockRideOptions);
    setShowRideOptions(true);
  };

  const handleSelectRideOption = (rideOption) => {
    setSelectedRideOption(rideOption);
  };

  const handleConfirmRide = () => {
    setConfirmRide(true);
  };

  const handleBackToSelection = () => {
    setConfirmRide(false);
    setSelectedRideOption(null);
  };

  return (
    <div className="App">
      {showRideOptions ? (
        <RideOptions
          rideOptions={rideOptions}
          onSelectRideOption={handleSelectRideOption}
        />
      ) : (
        <PickupForm
          pickupLocation={pickupLocation}
          dropLocation={dropLocation}
          date={date}
          seats={seats}
          onPickupLocationChange={setPickupLocation}
          onDropLocationChange={setDropLocation}
          onDateChange={setDate}
          onSeatsChange={setSeats}
          onFindRide={findRide}
        />
      )}
      {confirmRide && selectedRideOption && (
        <ConfirmationContainer
          selectedRideOption={selectedRideOption}
          onConfirmRide={handleConfirmRide}
          onBackToSelection={handleBackToSelection}
        />
      )}
      <div className="map-container">
        <MapContainer center={{ lat: 28.6139, lng: 77.2090 }} zoom={15} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {pickupLocation && (
            <Marker position={{ lat: 28.6139, lng: 77.2090 }} icon={pickupIcon}>
              <Popup>Pickup Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
            </Marker>
          )}
          {dropLocation && (
            <Marker position={{ lat: 28.6129, lng: 77.2295 }} icon={dropIcon}>
              <Popup>Drop Location: {JSON.stringify({ lat: 28.6139, lng: 77.2090 })}</Popup>
            </Marker>
          )}
          {pickupLocation && dropLocation && (
            <Polyline positions={[[28.6139, 77.2090], [28.6129, 77.2295]]} color="blue" />
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;

