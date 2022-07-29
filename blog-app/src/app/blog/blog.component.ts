import { Component, OnInit , Input} from '@angular/core';
import { Blog } from 'src/app/blog.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() article!:Blog;

  constructor() { }
  ngOnInit(): void {
  
}
}
