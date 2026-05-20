import { Routes } from '@angular/router';
import { VitrineComponent } from '../app/pages/vitrine/vitrine.component';
import { CarrinhoComponent } from '../app/pages/carrinho/carrinho.component';
import { ProdutoDetalheComponent } from '../app/pages/produto-detalhe/produto-detalhe.component';
import { NaoEncontradaComponent } from '../app/pages/nao-encontrada/nao-encontrada.component';

export const routes: Routes = [
    { path: '', redirectTo: 'vitrine', pathMatch: 'full'},
    { path: 'vitrine', component: VitrineComponent },
    
    { path: 'carrinho', component: CarrinhoComponent },
    
    { path: 'produto/:id', component: ProdutoDetalheComponent },
    
    { path: '**', component: NaoEncontradaComponent }
];
