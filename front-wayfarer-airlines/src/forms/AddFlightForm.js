import React, { useState } from "react";

const AddFlightForm = (props) => {
  const initialFormState = {
    id: null,
    departure: "",
    arrival: "",
    flightClass: "",
    terminal: "",
    flightNumber: "",
  };
  const [flight, setFlight] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFlight({ ...flight, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          !flight.departure ||
          !flight.arrival ||
          !flight.flightClass ||
          !flight.terminal ||
          !flight.flightNumber
        )
          return;

        props.addFlight(flight);
        setFlight(initialFormState);
      }}
    >
      <label>Departure</label>
      <input
        type="text"
        name="departure"
        value={flight.departure}
        onChange={handleInputChange}
      />
      <label>Arrival</label>
      <input
        type="text"
        name="arrival"
        value={flight.arrival}
        onChange={handleInputChange}
      />
      <label>Flight Class</label>
      <input
        type="text"
        name="flightClass"
        value={flight.flightClass}
        onChange={handleInputChange}
      />
      <label>Terminal</label>
      <input
        type="text"
        name="terminal"
        value={flight.terminal}
        onChange={handleInputChange}
      />
      <label>Flight Number</label>
      <input
        type="text"
        name="flightNumber"
        value={flight.flightNumber}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddFlightForm;
