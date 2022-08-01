import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/blog.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  article!:Blog;
  commentForm!: FormGroup;
  commentPreview$!: Observable <Blog>;
  

  constructor(private articlesServices : BlogService, private route: ActivatedRoute,private router:Router ,private formBuilder: FormBuilder,private blogService: BlogService) { }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.params['id'];
    this.article = this.articlesServices.getArticleById(articleId);
    this.commentForm = this.formBuilder.group({
      content: [null , [Validators.required]],
      auteur: [null, [Validators.required]],
      date: [null],
      id :[null]
  },
  {
    updateOn: 'blur'
});
  }
  onViewDetails(): void {
    this.router.navigateByUrl('article');
  }
  onViewComment(): void {
    this.router.navigateByUrl('articles/:id');
  }
  onSubmitForm() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.addArticle(this.commentForm.value);
    this.router.navigateByUrl('article');
    
}

}
