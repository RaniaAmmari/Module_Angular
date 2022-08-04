import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/core/models/blog.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() article!:Blog;

  constructor(private router:Router) { }
  ngOnInit(): void {
  
}
onViewArticle(): void {
  this.router.navigateByUrl(`article/${this.article.id}`);
}

}
