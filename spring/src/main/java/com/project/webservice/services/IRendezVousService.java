package com.project.webservice.services;

import com.project.webservice.entities.RendezVous;

import java.util.List;
import java.util.Optional;

public interface IRendezVousService {

    List<RendezVous> getAllRendezVous();

    Optional<RendezVous> getRendezVousById(Long id);

    RendezVous createRendezVous(RendezVous rendezVous);

    RendezVous updateRendezVous(Long id, RendezVous rendezVous);

    void deleteRendezVous(Long id);


}
