import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog.model';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  articles!: Blog[];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.articles = this.blogService.getArticles();
  }

}
