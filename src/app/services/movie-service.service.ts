import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  getMoviesFromUrl() {
    return this.http.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  movieFromUrl(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  getMovies() {
    return of(movies);
  }

  movie(id: number) {
    return of(
      movies.find(movie => +movie.id === +id)
    );
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
