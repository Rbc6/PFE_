package com.project.webservice.controllers;

import com.project.webservice.detailsService.JwtService;
import com.project.webservice.entities.AuthRequest;
import com.project.webservice.entities.Medecin;
import com.project.webservice.entities.Utilisateur;
import com.project.webservice.entities.dto.LoginDTO;
import com.project.webservice.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;


    @PostMapping("/login")
    public LoginDTO addUser(@RequestBody AuthRequest authRequest){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
        if(authenticate.isAuthenticated()){
            return new LoginDTO(jwtService.generateToken(authRequest.getUserName())) ;
        }else {
            throw new UsernameNotFoundException("Invalid user request");
        }
    }

    public UserController(IUserService userService) {
        this.userService = userService;
    }


    @GetMapping(path= "/getAll")
    //@PreAuthorize("hasAuthority('USER')")
    public List<Utilisateur> getAll(){
        return userService.getAllUsers();
    }

    @GetMapping(path= "/getUser/{id}")
    public ResponseEntity<Utilisateur> getUserById(@PathVariable Long id){
        Utilisateur utilisateur= userService.findById(id);
        return (utilisateur== null)
                ? new ResponseEntity<Utilisateur>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<Utilisateur>(utilisateur,HttpStatus.OK);
    }
    @GetMapping(path= "/byUsename/{username}")
    public ResponseEntity<Utilisateur> getUserByUsername(@PathVariable String username){
        Utilisateur utilisateur= userService.findByUserName(username).orElse(null);
        return (utilisateur== null)
                ? new ResponseEntity<Utilisateur>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<Utilisateur>(utilisateur,HttpStatus.OK);
    }


    @PostMapping(path = "/addUser")
    //@PreAuthorize("hasAuthority('ADMIN')")
    public Utilisateur addUser(@RequestBody Utilisateur user){
        return userService.createUser(user);
    }

    @PutMapping(path = "/updateUser/{id}")
    public Utilisateur updateUser(@RequestBody Utilisateur user){
        return userService.updateUser(user);
    }
    
    @DeleteMapping(path = "/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

}
