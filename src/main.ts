import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PokemonListComponent } from './app/components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './app/components/pokemon-detail/pokemon-detail.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: PokemonListComponent },
      { path: 'pokemon/:name', component: PokemonDetailComponent }
    ]),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
