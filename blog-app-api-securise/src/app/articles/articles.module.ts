import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { UserlogComponent } from '../userlog/userlog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesRoutingModule } from './articles-routing.module';



@NgModule({
  declarations: [
    BlogComponent,
    BlogDetailComponent,
    NewArticleComponent,
    ShowdetailsComponent,
    UserlogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticlesRoutingModule
  ],
  exports :[
    BlogComponent,
    BlogDetailComponent,
    NewArticleComponent,
    ShowdetailsComponent,
    UserlogComponent

  ]
})
export class ArticlesModule { }
