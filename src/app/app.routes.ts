import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

export const routes: Routes = [
  { path: '', component: UsuarioComponent },            // Página inicial (usuário)
  { path: 'catalogo', component: CatalogoComponent },    // Página de catálogo
  { path: 'usuario', component: UsuarioComponent },      // Página de usuário
  { path: 'pedidos', component: PedidosComponent },      // Página de pedidos
  { path: 'carrinho', component: CarrinhoComponent },    // Página de carrinho
  { path: '**', redirectTo: '', pathMatch: 'full' }      // Redireciona para a página inicial em caso de rota desconhecida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
