import React, { useState } from 'react'

const EditFlightForm = (props) => {
  const [flight, setFlight] = useState(props.currentFlight)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFlight({ ...flight, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateFlight(flight.id, flight)
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditFlightForm