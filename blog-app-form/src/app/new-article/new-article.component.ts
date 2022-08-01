import { Blog } from './../blog.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, min } from 'rxjs/operators';
import { BlogService} from 'src/app/blog.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articleForm!: FormGroup;
  articlePreview$!: Observable <Blog>;

  constructor(private formBuilder: FormBuilder ,  private router: Router ,private blogService: BlogService) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: [null , [Validators.required]],
      description: [null, [Validators.required]],
      auteur: [null, [Validators.required]],
      date: [null]
  },
  {
    updateOn: 'blur'
});

  this.articlePreview$ = this.articleForm.valueChanges.pipe(
    map( formvalue => ({
        ...formvalue,
        commentaires :[null],
        id: 0
    }))
  );
  }
  onSubmitForm() {
    this.blogService.addArticle(this.articleForm.value);
    this.router.navigateByUrl('/article');
}

}
