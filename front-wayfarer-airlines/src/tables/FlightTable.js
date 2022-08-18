import React from "react";

const FlightTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Departure</th>
        <th>Arrival</th>
        <th>Flight Class</th>
        <th>Terminal</th>
        <th>Flight Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.flights.length > 0 ? (
        props.flights.map((flight) => (
          <tr key={flight.id}>
            <td>{flight.departure}</td>
            <td>{flight.arrival}</td>
            <td>{flight.flightClass}</td>
            <td>{flight.terminal}</td>
            <td>{flight.flightNumber}</td>
            <td>
              <button
                onClick={() => props.editRow(flight)}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteFlight(flight.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No flights</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default FlightTable;
