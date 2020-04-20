import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
