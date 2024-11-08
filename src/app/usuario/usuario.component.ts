import { Router } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  constructor(private router:Router){}

  logar() {
    this.router.navigate(['/catalogo'])
  }
}
