package com.project.webservice.services;

import com.project.webservice.entities.RendezVous;
import com.project.webservice.repositories.RendezVousRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RendezVousServiceImpl implements IRendezVousService{
    private final RendezVousRepository rendezVousRepository;

    public RendezVousServiceImpl(RendezVousRepository rendezVousRepository) {
        this.rendezVousRepository = rendezVousRepository;
    }
    @Override
    public List<RendezVous> getAllRendezVous() {
        return rendezVousRepository.findAll();
    }

    @Override

    public Optional<RendezVous> getRendezVousById(Long id) {
        return rendezVousRepository.findById(id);
    }

    @Override
    public RendezVous createRendezVous(RendezVous rendezVous) {
        return rendezVousRepository.save(rendezVous);
    }

    @Override
    public RendezVous updateRendezVous(Long id, RendezVous rendezVous) {
        if (rendezVousRepository.existsById(id)) {
            rendezVous.setId(id);
            return rendezVousRepository.save(rendezVous);
        }
        return null;
    }

    @Override
    public void deleteRendezVous(Long id) {
        rendezVousRepository.deleteById(id);
    }
}