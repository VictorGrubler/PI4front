import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

    pedidos: any[] = [];

    ngOnInit(): void {
      this.carregarPedidos();
    }

    carregarPedidos(): void {
      this.pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    }

    concluirPedido(index: number): void {
      this.pedidos.splice(index, 1);
      localStorage.setItem('pedidos', JSON.stringify(this.pedidos));
      this.carregarPedidos();
    }
}
