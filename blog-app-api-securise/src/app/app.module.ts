import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserlogComponent } from './userlog/userlog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    BlogDetailComponent,
    LandingPageComponent,
    ShowdetailsComponent,
    NewArticleComponent,
    UserlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
