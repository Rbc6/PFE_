package com.project.webservice.controllers;


import com.project.webservice.entities.Dossier;
import com.project.webservice.entities.Image;
import com.project.webservice.filter.ImageUtility;
import com.project.webservice.repositories.ImageRepository;
import com.project.webservice.services.IDossierService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin(origins = "http://localhost:8082") open for specific port
@CrossOrigin("*") // open for all ports
public class ImageController {
    final
    IDossierService dossierService ;
    final
    ImageRepository imageRepository;

    public ImageController(IDossierService dossierService, ImageRepository imageRepository) {
        this.dossierService = dossierService;
        this.imageRepository = imageRepository;
    }

    @PostMapping("/upload/image/{id}")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file , @PathVariable long id)
            throws IOException {
        Dossier dossier = dossierService.getDossierById(id).orElse(null);
        if(dossier == null)
            return ResponseEntity.badRequest().body(new ImageUploadResponse("dossier on trouvé"));
        imageRepository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtility.compressImage(file.getBytes()))
                .dossier(dossier)
                .build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{name}"})
    public Image getImageDetails(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return Image.builder()
                .id(dbImage.get().getId())
                .dossier(dbImage.get().getDossier())
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();
    }

    @GetMapping(path = {"/get/image/info/byDossier/{id}"})
    public Image getImageDetails(@PathVariable("id") long id) throws IOException {
        Dossier dossier = dossierService.getDossierById(id).orElse(null);
        if(dossier == null)
            return null;
        final List<Image> imageList = imageRepository.findImageByDossier(dossier);
        if(imageList.isEmpty())
            return null;
        return Image.builder()
                .id(imageList.get(imageList.size()-1).getId())
                .dossier(imageList.get(imageList.size()-1).getDossier())
                .name(imageList.get(imageList.size()-1).getName())
                .type(imageList.get(imageList.size()-1).getType())
                .image(ImageUtility.decompressImage(imageList.get(imageList.size()-1).getImage())).build();
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name) throws IOException {

        final Optional<Image> dbImage = imageRepository.findByName(name);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }



    @GetMapping(path = {"/get/image/byDossier/{id}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("id") long id) throws IOException {
        Dossier dossier = dossierService.getDossierById(id).orElse(null);
        if(dossier == null)
            return null;

        final List<Image> imageList = imageRepository.findImageByDossier(dossier);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(imageList.get(imageList.size()-1).getType()))
                .body(ImageUtility.decompressImage(imageList.get(imageList.size()-1).getImage()));
    }


}