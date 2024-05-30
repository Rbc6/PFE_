package com.project.webservice.repositories;

import com.project.webservice.entities.Allergies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AllergiesRepository extends JpaRepository<Allergies, Long> {
}
