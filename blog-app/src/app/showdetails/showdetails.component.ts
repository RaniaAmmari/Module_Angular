import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/blog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  article!:Blog;

  constructor(private articlesServices : BlogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.params['id'];
    this.article = this.articlesServices.getArticleById(articleId);
  }

}
