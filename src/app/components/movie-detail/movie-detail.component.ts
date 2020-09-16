import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { MovieServiceService } from "src/app/services/movie-service.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit, OnDestroy{
  id: number;
  movieModel: Movie;
  movieSubs$: Subscription;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // GET ID FROM THE MOVIE
    this.id = +this.route.snapshot.paramMap.get("id");

    // Subscription each movie when we click
    this.movieSubs$ = this.movieService.movie(this.id).subscribe((movie) => {
      this.movieModel = movie;
      console.log(movie);
    });
  }

  ngOnDestroy() {
    // Every we subscribe the model data, we need to unsubscribe immediately 
    // We do those function in ngOnDestroy
    this.movieSubs$.unsubscribe();
  }
}