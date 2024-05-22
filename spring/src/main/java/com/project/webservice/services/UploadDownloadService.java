package com.project.webservice.services;


import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import com.project.webservice.entities.Consultation;
import com.project.webservice.entities.FileConsultaion;
import com.project.webservice.entities.RendezVous;
import com.project.webservice.repositories.ConsultationRepository;
import com.project.webservice.repositories.FileConsultaionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadDownloadService {
    @Autowired
    FileConsultaionRepository fileConsultaionRepository;
    @Autowired
    ConsultationRepository consultationRepository;
    public List<String> uploadFile(MultipartFile file , RendezVous rendezVous) throws Exception {
        String uploadDir = "./uploads/";
        Path uploadPath = Paths.get(uploadDir);

        // Create the directory if it doesn't exist
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        // Save file on system
        if (!file.getOriginalFilename().isEmpty()) {
            FileConsultaion fileConsultaion = new FileConsultaion();
            fileConsultaion.setName(file.getOriginalFilename());
            fileConsultaion.setRendezVous(rendezVous);
            fileConsultaionRepository.save(fileConsultaion);
            BufferedOutputStream outputStream = new BufferedOutputStream(
                    new FileOutputStream(new File(String.valueOf(uploadPath), file.getOriginalFilename())));
            outputStream.write(file.getBytes());
            outputStream.flush();
            outputStream.close();
        } else {
            throw new Exception();
        }

        List<String> list = new ArrayList<String>();
        File files = new File(String.valueOf(uploadPath));
        String[] fileList = ((File) files).list();
        for (String name : fileList) {
            list.add(name);
        }

        return list;

    }

    public List<String> getListofFiles() throws Exception {
        String uploadDir = "./uploads/";
        Path uploadPath = Paths.get(uploadDir);

        // Create the directory if it doesn't exist
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        List<String> list = new ArrayList<String>();
        File files = new File(String.valueOf(uploadPath));
        String[] fileList = files.list();
        for (String name : fileList) {
            list.add(name);
        }

        return list;

    }
}

