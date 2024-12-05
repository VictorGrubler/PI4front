import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importação do CommonModule
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule], // Inclua o CommonModule aqui
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent {
  drinks = [
    {
      nome: 'Negroni',
      descricao: 'Um clássico coquetel italiano, feito com gin, vermute rosso e Campari, decorado com laranja.',
      preco: 'R$ 29,90',
      imagem: 'assets/Negroni.png',
    },
    {
      nome: 'Old Fashioned',
      descricao: 'Whisky, açúcar, bitter e uma pitada de água. Um clássico robusto e elegante.',
      preco: 'R$ 22,90',
      imagem: 'assets/Old fashioned.png',
    },
    {
      nome: 'Mojito',
      descricao: 'Refrescante combinação de rum, hortelã, limão, açúcar e água com gás.',
      preco: 'R$ 29,90',
      imagem: 'assets/Mojito.png',
    },
    {
      nome: 'Manhattan',
      descricao: 'Whisky e vermute doce com um toque de Angostura. Elegância em cada gole.',
      preco: 'R$ 29,90',
      imagem: 'assets/manhattan.png',
    },
  ];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  adicionarAoCarrinho(drink: any) {
    this.carrinhoService.adicionarItem(drink);
    console.log('Item adicionado:', drink); // Log para depuração
    alert(`${drink.nome} foi adicionado ao carrinho!`);
  }

  navegarParaCarrinho() {
    this.router.navigate(['/carrinho']);
  }


  Carrinho() {
    this.router.navigate(['/carrinho'])
  }

}
