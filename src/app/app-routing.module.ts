import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'MovieList', pathMatch: 'full'},
  { path: 'MovieList', loadChildren: () => import('./components/movie-list/movie-list.module').then(m => m.MovieListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
