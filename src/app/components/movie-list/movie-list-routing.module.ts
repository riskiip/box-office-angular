import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

import { MovieListComponent } from './movie-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add', component: AddMovieComponent },
  { path: ':id', component: MovieDetailComponent } // Inget, router dengan parameter merupakan prioritas terakhir. Taro paling bawah. It works!
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
