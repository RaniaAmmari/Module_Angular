import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public JwtHelper : JwtHelperService) { }

  ngOnInit(): void {
    let token =JSON.parse(localStorage.getItem('jwt') || '{}').token;
    let tokenPayload = this.JwtHelper.decodeToken(token).roles;
    console.log (tokenPayload.includes("ROLE_ADMIN"));
  }

}
