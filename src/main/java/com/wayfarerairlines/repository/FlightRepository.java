package com.wayfarerairlines.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wayfarerairlines.model.FlightModel;

public interface FlightRepository extends JpaRepository<FlightModel, Long> {

}
