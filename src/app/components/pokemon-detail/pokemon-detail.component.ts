import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
  imports: [CommonModule],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.fetchPokemonDetails(name);
    }
  }

  fetchPokemonDetails(name: string): void {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .subscribe(response => {
        this.pokemon = response;
      });
  }
}
