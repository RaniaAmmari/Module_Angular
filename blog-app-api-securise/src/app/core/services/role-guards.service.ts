
import { Injectable } from '@angular/core';
import {  Router,CanActivate,ActivatedRouteSnapshot} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable()

export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router ,public jwtHelper: JwtHelperService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    
    let expectedRole = route.data.expectedRole;
    let token =JSON.parse(localStorage.getItem('jwt') || '{}').token;
    
    let tokenPayload = this.jwtHelper.decodeToken(token).roles;
    
    if (  
      !this.auth.isAuthenticated() || !tokenPayload.includes(expectedRole) ) {
        window.alert('accées interdit');
      return false;
    }
    return true;
  }
}