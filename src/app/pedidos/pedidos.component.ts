import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  pedidosAtuais: any[] = [];
  pedidosHistorico: any[] = [];
  exibirHistorico: boolean = false;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.carregarPedidosAtuais();
  }

  carregarPedidosAtuais() {
    this.pedidosAtuais = this.pedidoService.obterPedidosAtuais();
  }

  carregarPedidosHistorico() {
    this.pedidosHistorico = this.pedidoService.obterPedidosHistorico();
  }

  limparPedidosAtuais() {
    this.pedidoService.limparPedidos(); // Move pedidos atuais para o histórico
    this.carregarPedidosAtuais(); // Atualiza a lista de pedidos atuais
  }

  toggleHistorico() {
    this.exibirHistorico = !this.exibirHistorico;
    if (this.exibirHistorico) {
      this.carregarPedidosHistorico(); // Carrega histórico somente quando necessário
    }
  }
}
