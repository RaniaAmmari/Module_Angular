import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog.model';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  articles!: Blog[];

  constructor(private blogService:BlogService,private router: Router) { }

  ngOnInit(): void {
    this.articles = this.blogService.getArticles();
  }
  onAddNewArticle() {
    this.router.navigateByUrl('create');
  }

}
