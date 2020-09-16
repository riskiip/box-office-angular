import { animate, transition, trigger, query, style, stagger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { NavbarService } from "src/app/services/navbar.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(
              '50ms',
              animate(
                '500ms ease-in',
                style({ opacity: 1, transform: 'translateY(0px)' }),
              ),
            ),
          ],
          { optional: true },
        ),
        query(
          ':leave',
          [animate('500ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
          {
            optional: true,
          },
        ),
      ]),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  loadingMovies: Array<Number>;

  constructor(
    private movieService: MovieServiceService,
    private navbar: NavbarService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(10).fill(0).map((n, index) => index);
    this.movies$ = this.movieService.getMoviesFromUrl();
    this.navbar.title.next("Box Office");
  }
}
