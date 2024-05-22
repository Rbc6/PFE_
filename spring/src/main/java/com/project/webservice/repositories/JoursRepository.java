package com.project.webservice.repositories;

import com.project.webservice.entities.Jours;
import com.project.webservice.entities.emun.JoursEnum;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JoursRepository extends JpaRepository<Jours , Long> {
    Jours findByLabel(JoursEnum label);
}
