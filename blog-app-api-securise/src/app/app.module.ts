import { RoleGuardService } from './core/services/role-guards.service';
import { AuthGuardService } from './core/services/auth-guard.service';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ArticlesRoutingModule } from './articles/articles-routing.module';
import{ JwtHelperService ,JWT_OPTIONS} from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
   
  ],
  providers: [ { provide: JWT_OPTIONS , useValue: JWT_OPTIONS},

    AuthGuardService, JwtHelperService, RoleGuardService,
 
   ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
