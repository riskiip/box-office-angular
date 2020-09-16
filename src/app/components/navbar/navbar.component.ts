import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title$ = this.navbar.title;

  constructor(
    private navbar: NavbarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
