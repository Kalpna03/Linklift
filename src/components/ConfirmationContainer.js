import React from "react";

function ConfirmationContainer({
  selectedRideOption,
  onConfirmRide,
  onBackToSelection,
}) {
  return (
    <div className="confirmation-container">
      <h2>Confirm Ride</h2>
      <p>Selected Vehicle Number: {selectedRideOption.vehicleNumber}</p>
      <p>Vehicle Info: {selectedRideOption.vehicleInfo}</p>
      <p>Amount: {selectedRideOption.amount}</p>
      <button onClick={onConfirmRide}>Confirm Ride</button>
      <button onClick={onBackToSelection}>Back to Selection</button>
    </div>
  );
}

export default ConfirmationContainer;

