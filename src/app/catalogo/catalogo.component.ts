import { CarrinhoService } from './../carrinho.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent {
  constructor(private router: Router, private carrinhoService: CarrinhoService) {}


  adicionarPedido(nome: string, preco: number): void {
    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');

    // Verifica se o item já existe nos pedidos
    const itemExistente = pedidos.find((pedido: any) => pedido.nome === nome);

    if (itemExistente) {
      alert(`O item "${nome}" já foi adicionado ao pedido.`);
      return;
    }

    // Solicita o número da mesa
    const numeroMesa = prompt('Por favor, insira o número da sua mesa:');

    // Verifica se o número da mesa foi inserido
    if (!numeroMesa || isNaN(Number(numeroMesa))) {
      alert('Número da mesa inválido. Por favor, tente novamente.');
      return;
    }

    // Arredonda o preço para 2 casas decimais
    const precoCom2Casas = parseFloat(preco.toFixed(2));

    const novoPedido = {
      nome,
      preco: precoCom2Casas, // Preço com 2 casas decimais
      status: 'Pendente',
      dataHora: new Date().toLocaleString(), // Adiciona a data e hora formatada
      numeroMesa: Number(numeroMesa), // Adiciona o número da mesa
    };

    pedidos.push(novoPedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    alert(`Pedido adicionado: ${nome}, Mesa: ${numeroMesa}, Preço: R$ ${precoCom2Casas.toFixed(2)}`);
  }

  Carrinho() {
    this.router.navigate(['/carrinho'])
  }

}
