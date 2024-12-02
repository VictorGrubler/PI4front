// carrinho.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private storageKey = 'pedidos'; // Chave para armazenar os pedidos no localStorage

  constructor() { }

  // Método para obter todos os pedidos
  getPedidos(): any[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // Método para adicionar um novo pedido
  adicionarPedido(nome: string, preco: number, numeroMesa: number): void {
    const pedidos = this.getPedidos();

    // Verifica se o item já existe nos pedidos
    const itemExistente = pedidos.find((pedido: any) => pedido.nome === nome);

    if (itemExistente) {
      alert(`O item "${nome}" já foi adicionado ao pedido.`);
      return;
    }

    // Arredonda o preço para 2 casas decimais
    const precoCom2Casas = parseFloat(preco.toFixed(2));

    const novoPedido = {
      nome,
      preco: precoCom2Casas, // Preço com 2 casas decimais
      status: 'Pendente',
      dataHora: new Date().toLocaleString(), // Adiciona a data e hora formatada
      numeroMesa: numeroMesa, // Adiciona o número da mesa
    };

    pedidos.push(novoPedido);
    localStorage.setItem(this.storageKey, JSON.stringify(pedidos));
    alert(`Pedido adicionado: ${nome}, Mesa: ${numeroMesa}, Preço: R$ ${precoCom2Casas.toFixed(2)}`);
  }
}
