import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: true, // Standalone component
  imports: [CommonModule, RouterModule] // Importowanie modułów, które są potrzebne
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .subscribe((response: any) => {
        this.pokemons = response.results;
      });
  }
}
