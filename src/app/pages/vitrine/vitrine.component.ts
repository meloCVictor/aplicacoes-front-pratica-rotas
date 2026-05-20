import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
  produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 5000 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 150 },
    { id: 3, nome: 'Teclado Mecânico', preco: 300 }
  ];

}
