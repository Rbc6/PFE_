package com.project.webservice.repositories;


import com.project.webservice.entities.Dossier;
import com.project.webservice.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image, Long> {
	Optional<Image> findByName(String name);

	List<Image> findImageByDossier(Dossier dossier);
}
