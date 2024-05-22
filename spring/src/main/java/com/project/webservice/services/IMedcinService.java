package com.project.webservice.services;

import com.project.webservice.entities.Medecin;

import java.util.List;
import java.util.Optional;

public interface IMedcinService {

     List<Medecin> getAllMedecins();

     Optional<Medecin> getMedecinById(Long id) ;

     Optional<Medecin> getMedecinByCode(String code) ;

     Medecin createMedecin(Medecin medecin);

     Medecin updateMedecin(Long id, Medecin medecin);

     void deleteMedecin(Long id) ;
}
