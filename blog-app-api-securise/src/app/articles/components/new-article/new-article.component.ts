import { Blog } from '../../../core/models/blog.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators, ValidatorFn, AbstractControl,ValidationErrors} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService} from 'src/app/core/services/blog.service'
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
      content: [null, [Validators.required]],
      autor: [null, [Validators.required]],
      date: [new Date(), [this.dateValidator()]]
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
    this.blogService.addArticle(this.articleForm.value).subscribe();
    this.router.navigateByUrl('/article');
}

dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const currentDate = new Date();

    if(!(control.value)) {
      // if there's no control or no value, that's ok
      return null;
    }

    // return null if there's no errors
    return new Date(control.value).getTime() > currentDate.getTime() 
    ? null
    : {invalidDate: ' Entrer une date supérieur à la date actuelle' } ;
  }
}


}
