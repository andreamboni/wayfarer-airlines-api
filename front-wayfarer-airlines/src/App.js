import React, { useEffect, useState } from "react";
import AddFlightForm from "./forms/AddFlightForm";
import FlightTable from "./tables/FlightTable";

const App = () => {
  const [flights, setFlights] = useState([]);
  const endPoint = "http://localhost:8080/flight"

  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setFlights(data);
      });
  }, []);

  const addFlight = (flight) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: flight.departure,
        arrival: flight.arrival,
        flightClass: flight.flightClass,
        terminal: flight.terminal,
        flightNumber: flight.flightNumber,
      }),
    };
    fetch(endPoint, requestOptions)
    .then(setFlights([...flights, flight]))
    .then((response) => {
      response.json()
      console.log(response)
    })
};



  return (
    <div className="container">
      <h1>Project Airlines Front Prototype</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add flight</h2>
          <AddFlightForm addFlight={addFlight} />
        </div>
        <div className="flex-large">
          <h2>View flights</h2>
          <FlightTable flights={flights} />
        </div>
      </div>
    </div>
  );
};

export default App;
