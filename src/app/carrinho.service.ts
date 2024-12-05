import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Torna o serviço acessível em toda a aplicação
})
export class CarrinhoService {
  private itens: any[] = []; // Lista para armazenar os itens do carrinho

  // Adiciona um item ao carrinho
  adicionarItem(item: any) {
    this.itens.push(item);
  }

  // Retorna os itens do carrinho
  obterItens() {
    return this.itens;
  }

  // Limpa o carrinho
  limparCarrinho() {
    this.itens = [];
  }
}
