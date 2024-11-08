import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'catalogo', component: CatalogoComponent}
];
