package com.project.webservice.repositories;

import com.project.webservice.entities.Medicaments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicamentRepository extends JpaRepository<Medicaments, Long> {
}
