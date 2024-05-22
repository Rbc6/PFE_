package com.project.webservice.repositories;

import com.project.webservice.entities.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MedecinRepository extends JpaRepository<Medecin , Long> {

    Optional<Medecin> findByCode(String code);


    @Query("SELECT s.specialiteMedicale, COUNT(m) FROM Medecin m JOIN m.specialites s GROUP BY s.specialiteMedicale")
    List<Object[]> countDoctorsBySpecialty();
}
