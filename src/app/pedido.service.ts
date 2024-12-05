import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private pedidosAtuais: any[] = [];
  private pedidosHistorico: any[] = [];

  constructor() {}

  // Adicionar pedido à lista de pedidos atuais
  adicionarPedido(pedido: any) {
    this.pedidosAtuais.push(pedido);
  }

  // Obter lista de pedidos atuais
  obterPedidosAtuais() {
    return this.pedidosAtuais;
  }

  // Obter histórico de pedidos
  obterPedidosHistorico() {
    return this.pedidosHistorico;
  }

  // Limpar pedidos atuais
  limparPedidos() {
    this.pedidosHistorico.push(...this.pedidosAtuais); // Move todos os pedidos atuais para o histórico
    this.pedidosAtuais = []; // Limpa os pedidos atuais
  }

  // Mover pedidos para o histórico
  finalizarPedido(pedido: any) {
    this.pedidosHistorico.push(pedido);
    this.pedidosAtuais = this.pedidosAtuais.filter((p) => p !== pedido);
  }
}
