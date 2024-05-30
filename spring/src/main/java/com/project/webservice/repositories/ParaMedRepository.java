package com.project.webservice.repositories;

import com.project.webservice.entities.Paramedicales;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParaMedRepository extends JpaRepository<Paramedicales, Long> {
}
