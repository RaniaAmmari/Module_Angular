import { Commentaire } from 'src/app/commentaire.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/blog.model';
import { HttpClient } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articles: Blog[] = [];
  
  constructor(private http: HttpClient) { }

  getArticles() : Observable <Blog[]> {
    return this.http.get<Blog[]>('http://127.0.0.1:8000/article');
  }

  getArticleById(id:number) : Blog {
    const article = this.articles.find( article => article.id === id );
    if (!article) {
      throw new Error('Article non trouvé');
    }else{
      return article;
    }
  }
  sortArticles(): Blog[] {
    return this.articles.sort(function(a,b): any{
      return (b.date.getTime() - a.date.getTime());
      });
  }
  addArticle(formValue: { title: string, content: string, date: Date, autor: string }) {
    const article: Blog = {
        ...formValue,
        id: this.articles[this.articles.length - 1].id + 1
    };
    this.articles.push(article);
}
}