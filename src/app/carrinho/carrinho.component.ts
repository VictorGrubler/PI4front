import { PedidoService } from './../pedido.service';
import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  itens: any[] = [];
  total: number = 0;
  numeroMesa: string = '';

  constructor(
    private carrinhoService: CarrinhoService,
    private pedidoService: PedidoService // Corrigido para letra minúscula
  ) {}

  ngOnInit() {
    this.itens = this.carrinhoService.obterItens();
    this.calcularTotal();
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
    this.itens = [];
    this.total = 0;
  }

  calcularTotal() {
    this.total = this.itens.reduce((acc, item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      return acc + preco;
    }, 0);
  }

  finalizarPedido() {
    if (!this.numeroMesa) {
      alert('Por favor, informe o número da mesa.');
      return;
    }

    const pedido = {
      mesa: this.numeroMesa,
      itens: this.itens,
      dataHora: new Date(),
    };

    this.pedidoService.adicionarPedido(pedido); // Adiciona aos pedidos atuais
    this.limparCarrinho(); // Limpa o carrinho após finalizar o pedido
    alert('Pedido finalizado com sucesso!');
  }
}
