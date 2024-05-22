package com.project.webservice.repositories;

import com.project.webservice.entities.Specialites;
import com.project.webservice.entities.emun.SpecialiteMedicale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecialitiesRepository extends JpaRepository<Specialites , Long> {
    Specialites findBySpecialiteMedicale(SpecialiteMedicale specialiteMedicale);
}
