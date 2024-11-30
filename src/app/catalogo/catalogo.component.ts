import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
})
export class CatalogoComponent {
  adicionarPedido(nome: string, preco: number): void {
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    const novoPedido = {
      nome,
      preco,
      status: 'Pendente',
      dataHora: new Date().toLocaleString(), // Adiciona a data e hora formatada
    };
    pedidos.push(novoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    alert(`Pedido adicionado: ${nome}`);
  }
}
