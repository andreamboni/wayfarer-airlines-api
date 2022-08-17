package com.wayfarerairlines.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wayfarerairlines.model.FlightModel;
import com.wayfarerairlines.repository.FlightRepository;
import com.wayfarerairlines.service.FlightService;

@RestController
@RequestMapping(path = "/flight")
@CrossOrigin("*")
public class FlightController {

	@Autowired
	private FlightRepository repository;

	@Autowired
	private FlightService service;

	@PostMapping
	public ResponseEntity<?> addNewFlight(@RequestBody FlightModel flight) {
		return service.addNewFlight(flight);
	}

	@GetMapping
	public List<FlightModel> getAllFlights() {
		return repository.findAll();
	}

	@GetMapping(value = "/{id}")
	public  ResponseEntity<?> getFlightById(@PathVariable("id") Long id) {
		return service.getFlightById(id);
	}	

	@PutMapping(value = "/{id}")
	public ResponseEntity<?> updateFlightById(@PathVariable("id") Long id, @RequestBody FlightModel flight) {
		return service.updateFlightById(id, flight);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deleteFlight(@PathVariable Long id) {
		return service.deleteFlight(id);
	}

	@DeleteMapping(path = "/deleteAllFlights")
	public ResponseEntity<?> deleteAllFlights() {
		repository.deleteAll();
		return ResponseEntity.ok().build();
	}

}
