package com.project.webservice.entities;

import com.project.webservice.entities.emun.ExBio;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ExamenBiologique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String exbio;

    public ExamenBiologique(String exbio) {
        this.exbio = exbio;
    }
}
