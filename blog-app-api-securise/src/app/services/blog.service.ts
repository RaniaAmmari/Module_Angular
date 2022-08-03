import { FormGroup } from '@angular/forms';
import { Commentaire } from 'src/app/commentaire.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/blog.model';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articles: Blog[] = [];
  
  constructor(private http: HttpClient) { }

  getArticles() : Observable <Blog[]> {
    return this.http.get<Blog[]>('http://127.0.0.1:8000/article');
  }

  getArticleById(id:number) : Observable <Blog> {
    return this.http.get<Blog>( `http://127.0.0.1:8000/api/article/${id}`);
  }
  sortArticles(): Blog[] {
    return this.articles.sort(function(a,b): any{
      return (b.date.getTime() - a.date.getTime());
      });
  }
  addArticle( articleForm :FormGroup) : Observable <any>  {
    return this.http.post<any>('http://127.0.0.1:8000/api/article',articleForm);
}
}