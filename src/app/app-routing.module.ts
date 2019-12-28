import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'detalle/:id', component: DetalleComponent},
{path: 'about', component: AboutComponent},
{path: 'heroes', component: HeroesComponent},
{path: 'buscador/:termino', component: BuscadorComponent},
// cuando pongan cualquier url falsa
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
