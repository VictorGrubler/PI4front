package br.com.poo.poobank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.poo.poobank.domain.Usuario;
import br.com.poo.poobank.repositoy.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
   
    @Autowired
    private UsuarioRepository repository;
   
    @GetMapping
    public List<Usuario> buscartodos(){
        return repository.findAll();
    }

}
