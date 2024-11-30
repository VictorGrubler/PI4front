import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
