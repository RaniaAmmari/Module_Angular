import { Injectable } from '@angular/core';
import { Blog } from 'src/app/blog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articles: Blog[] = [
    {
      id : 1,
      title : 'Java ',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et elit ut odio volutpat accumsan. Mauris bibendum quis erat aliquam laoreet. Cras porta risus vel sagittis aliquet. Praesent in ligula at mi efficitur hendrerit. Praesent porta erat eu justo mollis, ornare ullamcorper metus gravida. Phasellus iaculis quam vitae justo eleifend sodales. Vestibulum ut ante diam. Morbi sollicitudin sit amet arcu ut pharetra. Maecenas bibendum massa in lobortis scelerisque. Nulla sit amet mollis elit. Phasellus ut massa ut nisl pellentesque imperdiet.',
      auteur : 'Montor 1',
      date : new Date('2022-01-03'),
      commentaires : [
        {
          id: 1,
          content : 'Intéressant',
          auteur : 'Salem AMMARI',
          date: new Date('2022-03-02')
        }]
    },
    {
      id:2,
      title : 'Data ',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et elit ut odio volutpat accumsan. Mauris bibendum quis erat aliquam laoreet. Cras porta risus vel sagittis aliquet. Praesent in ligula at mi efficitur hendrerit. Praesent porta erat eu justo mollis, ornare ullamcorper metus gravida. Phasellus iaculis quam vitae justo eleifend sodales. Vestibulum ut ante diam. Morbi sollicitudin sit amet arcu ut pharetra. Maecenas bibendum massa in lobortis scelerisque. Nulla sit amet mollis elit. Phasellus ut massa ut nisl pellentesque imperdiet.',
      auteur : 'Montor 2 Saly',
      date : new Date('2022-01-02'), 
      commentaires : [
        {
          id: 1,
          content : 'Intéressant',
          auteur : 'Salem AMMARI',
          date: new Date('2022-03-02')
        },
        {
          id: 2,
          content : 'Contenu à développer',
          auteur : 'Rania AMMARI',
          date: new Date('2022-08-08')
        },
      ]
    },
    {
      id:3,
      title : 'Php ',
      description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et elit ut odio volutpat accumsan. Mauris bibendum quis erat aliquam laoreet. Cras porta risus vel sagittis aliquet. Praesent in ligula at mi efficitur hendrerit. Praesent porta erat eu justo mollis, ornare ullamcorper metus gravida. Phasellus iaculis quam vitae justo eleifend sodales. Vestibulum ut ante diam. Morbi sollicitudin sit amet arcu ut pharetra. Maecenas bibendum massa in lobortis scelerisque. Nulla sit amet mollis elit. Phasellus ut massa ut nisl pellentesque imperdiet.',
      auteur : 'Montor 3 Dali',
      date : new Date('2022-01-01'),
      commentaires : [
        {
          id: 1,
          content : 'Intéressant',
          auteur : 'Mohamed AMMARI',
          date: new Date('2022-03-02')
        }]
       
    },
  ];

  constructor() { }

  getArticles() : Blog[] {
    return this.articles;
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
}