package com.project.webservice.repositories;

import com.project.webservice.entities.Consultation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultationRepository extends JpaRepository<Consultation , Long> {
}
