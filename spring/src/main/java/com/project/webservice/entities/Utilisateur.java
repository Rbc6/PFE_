package com.project.webservice.entities;


import com.project.webservice.entities.emun.Role;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Utilisateur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String userName;
    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    String password;
    LocalDate creationDate;
    boolean isActive;


    private Role role ;

}
