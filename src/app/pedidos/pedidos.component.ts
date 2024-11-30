import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
})
export class PedidosComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    const storedPedidos = localStorage.getItem('pedidos');
    const pedidos = storedPedidos ? JSON.parse(storedPedidos) : [];

    const pedidosContainer = this.el.nativeElement.querySelector('#pedidos-container');
    pedidosContainer.innerHTML = ''; // Garante que o contêiner esteja limpo antes de carregar os pedidos

    pedidos.forEach((pedido: { nome: string; preco: number; status: string; dataHora: string }) => {
      const pedidoElement = this.renderer.createElement('div');
      const pedidoText = this.renderer.createText(
        `${pedido.nome} - R$ ${pedido.preco.toFixed(2)} - Status: ${pedido.status} - Data/Hora: ${pedido.dataHora}`
      );

      this.renderer.appendChild(pedidoElement, pedidoText);
      this.renderer.appendChild(pedidosContainer, pedidoElement);
    });
  }

  limparPedidos(): void {
    const storedPedidos = localStorage.getItem('pedidos');
    const pedidos = storedPedidos ? JSON.parse(storedPedidos) : [];

    if (pedidos.length > 0) {
      // Armazena os pedidos removidos no localStorage em "pedidosRemovidos"
      const storedRemovidos = localStorage.getItem('pedidosRemovidos');
      const pedidosRemovidos = storedRemovidos ? JSON.parse(storedRemovidos) : [];
      pedidosRemovidos.push(...pedidos); // Adiciona os pedidos removidos à lista existente
      localStorage.setItem('pedidosRemovidos', JSON.stringify(pedidosRemovidos));
    }

    // Remove os pedidos atuais
    localStorage.removeItem('pedidos');

    // Limpa a interface
    const pedidosContainer = this.el.nativeElement.querySelector('#pedidos-container');
    pedidosContainer.innerHTML = '';

    alert('Lista de pedidos limpa com sucesso! Os pedidos foram armazenados como removidos.');
  }

  carregarPedidosRemovidos(): void {
    const storedRemovidos = localStorage.getItem('pedidosRemovidos');
    const pedidosRemovidos = storedRemovidos ? JSON.parse(storedRemovidos) : [];

    const removidosContainer = this.el.nativeElement.querySelector('#removidos-container');
    removidosContainer.innerHTML = ''; // Garante que o contêiner esteja limpo antes de carregar os pedidos removidos

    if (pedidosRemovidos.length === 0) {
      removidosContainer.innerHTML = '<p>Não há pedidos removidos.</p>';
      return;
    }

    pedidosRemovidos.forEach((pedido: { nome: string; preco: number; status: string; dataHora: string }) => {
      const pedidoElement = this.renderer.createElement('div');
      const pedidoText = this.renderer.createText(
        `${pedido.nome} - R$ ${pedido.preco.toFixed(2)} - Status: ${pedido.status} - Data/Hora: ${pedido.dataHora}`
      );

      this.renderer.appendChild(pedidoElement, pedidoText);
      this.renderer.appendChild(removidosContainer, pedidoElement);
    });
  }
}
