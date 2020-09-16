import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required])
  })

  constructor(
    private navbar: NavbarService,
    private movieService: MovieServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.navbar.title.next('Add Movie');
  }

  insertMovie(){
    if(this.addMovieForm.valid) { 
      this.movieService.addMovie(this.addMovieForm.value)
        .subscribe(res => {
          this.addMovieForm.reset;
          this.router.navigate(['/']);
        })
    }
  }

}
