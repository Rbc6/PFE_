package com.project.webservice.repositories;

import com.project.webservice.entities.Alert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlertRepository extends JpaRepository<Alert , Long> {
}
