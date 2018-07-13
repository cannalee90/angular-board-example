import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, select } from 'redux-observable';

import { ArticleActions } from '../article.actions';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './new.component.html',
  styleUrls: ['../article.css']
})
export class NewComponent implements OnInit {

  model: IArticle = new Article(0, '', '', '', new Date(), new Date());
  @select() readonly articles$: Observable<IArticle[]>;

  constructor(
    private actions: ArticleActions
  ) { }

  ngOnInit() {
    this.actions.fetchArticles();
    this.articles$
      .take(1)
      .subscribe((articles: IArticle[]) => {
        const nextId = (articles.length === 0) ? 1 : articles[articles.length - 1].id + 1;
        this.model.id = nextId;
      });
  }

  onSubmit() {
    this.actions.postArticle(this.model);
  }


}
