package com.project.webservice.repositories;

import com.project.webservice.entities.ExamenBiologique;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExBioRepository extends JpaRepository<ExamenBiologique, Long> {
}
