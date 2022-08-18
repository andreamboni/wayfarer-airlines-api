import React, { useEffect, useState } from "react";
import AddFlightForm from "./forms/AddFlightForm";
import EditFlightForm from "./forms/EditFlightForm";
import FlightTable from "./tables/FlightTable";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    departure: "",
    arrival: "",
    flightClass: "",
    terminal: "",
    flightNumber: "",
  };
  const [currentFlight, setCurrentFlight] = useState(initialFormState);

  const endPoint = "http://localhost:8080/flight/";

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
        response.json();
        console.log(response);
      });
  };

  const deleteFlight = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(endPoint + id, requestOptions)
      .then(setFlights(flights.filter((flight) => flight.id !== id)))
      .then((response) => {
        response.json();
        console.log(response);
      });
  };

  const editRow = (flight) => {
    setEditing(true);

    setCurrentFlight({
      id: flight.id,
      departure: flight.departure,
      arrival: flight.arrival,
      flightClass: flight.flightClass,
      terminal: flight.terminal,
      flightNumber: flight.flightNumber,
    });
  };

  const updateFlight = (id, updatedFlight) => {
    setEditing(false)
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        departure: updatedFlight.departure,
        arrival: updatedFlight.arrival,
        flightClass: updatedFlight.flightClass,
        terminal: updatedFlight.terminal,
        flightNumber: updatedFlight.flightNumber,
      }),
    };

    fetch(endPoint + id, requestOptions)
    .then(setFlights(flights.map((flight) => (flight.id === id ? updatedFlight : flight))))

  }

  return (
    <div className="container">
      <h1>Project Airlines Front Prototype</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Flight</h2>
              <EditFlightForm
                setEditing={setEditing}
                currentFlight={currentFlight}
                updateFlight={updateFlight}
              />
            </div>

          ) : (
            <div>
              <h2>Add flight</h2>
              <AddFlightForm addFlight={addFlight} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View flights</h2>
          <FlightTable flights={flights} editRow={editRow} deleteFlight={deleteFlight} />
        </div>
      </div>
    </div>
  );
};

export default App;
