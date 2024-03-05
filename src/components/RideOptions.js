import React from "react";

function RideOptions({ rideOptions, onSelectRideOption }) {
  return (
    <div className="ride-options-container">
      {rideOptions.map((rideOption) => (
        <div key={rideOption.vehicleNumber} className="ride-option">
          <img src={rideOption.imageSrc} alt={rideOption.vehicleNumber} className="ride-option-image" />
          <h3>{rideOption.vehicleInfo}</h3>
          <p>Amount: {rideOption.amount}</p>
          <button onClick={() => onSelectRideOption(rideOption)}>Select Ride</button>
        </div>
      ))}
    </div>
  );
}

export default RideOptions;
