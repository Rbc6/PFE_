package com.project.webservice.repositories;

import com.project.webservice.entities.ActeMedicaux;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActeMedRepository extends JpaRepository<ActeMedicaux, Long> {
}
