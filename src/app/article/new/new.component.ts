import { Component, OnInit, OnDestroy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ArticleActions } from '../article.actions';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './new.component.html',
  styleUrls: ['../article.css']
})
export class NewComponent implements OnInit, OnDestroy {

  model: IArticle = new Article(0, '', '', '', new Date(), new Date());
  @select() readonly articles$: Observable<IArticle[]>;
  private unsubscribe$ = new Subject();

  constructor(
    private actions: ArticleActions
  ) { }

  ngOnInit() {
    this.actions.fetchArticles();
    this.articles$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((articles: IArticle[]) => {
        const nextId = (articles.length === 0) ? 1 : articles[articles.length - 1].id + 1;
        this.model.id = nextId;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSubmit() {
    this.actions.postArticle(this.model);
  }


}
