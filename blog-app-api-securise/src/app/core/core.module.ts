import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [  
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:  () => localStorage.getItem('access_token')
      }
    })
    
  ],
  exports :[
    HeaderComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class CoreModule { }
