import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Movie } from "src/app/models/movie.model";
import { MovieServiceService } from "src/app/services/movie-service.service";
import { NavbarService } from 'src/app/services/navbar.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private navbar: NavbarService
  ) {}

  ngOnInit() {
    this.loadSpecificMovie();
  }
  
  loadSpecificMovie() {
    // GET ID FROM THE MOVIE
    this.id = +this.route.snapshot.paramMap.get("id");
  
    // Subscription each movie when we click
    this.movieSubs$ = this.movieService.movieFromUrl(this.id).subscribe((movie) => {
      this.movieModel = movie;
      this.navbar.title.next(movie.name);
      console.log(movie);
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  ngOnDestroy() {
    // Every we subscribe the model data, we need to unsubscribe immediately 
    // We do those function in ngOnDestroy
    this.movieSubs$.unsubscribe();
  }
}
