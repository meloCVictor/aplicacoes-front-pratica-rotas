import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {
  // A mágica: o Angular pega o :id da URL e joga nesta variável!
  @Input() id!: string;

  // Injetando o Router para navegação programática (via TypeScript)
  private router = inject(Router);


  adicionarAoCarrinho() {
    alert(`Produto ${this.id} adicionado!`);
    // Após adicionar, redireciona o usuário para o carrinho via código
    this.router.navigate(['/carrinho']);
  }

  voltar() {
    // Retorna para a página principal
    this.router.navigate(['/vitrine']);
  }


}
