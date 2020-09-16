import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieListModule { }
