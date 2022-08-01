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

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    BlogDetailComponent,
    LandingPageComponent,
    ShowdetailsComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
