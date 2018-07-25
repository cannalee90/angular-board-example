import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';

import { ArticleActions } from '../article.actions';
import { getContainDArticle } from '../../store/index';
import { IAppState } from '../../store';
import { IArticle } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../article.css']
})
export class ListComponent implements OnInit {
  @select() readonly articles$: Observable<IArticle[]>;
  @select(getContainDArticle) readonly filteredArticles$: Observable<IArticle[]>;
  articleLength: number = 0;
  filteredArticleLength: number = 0;
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ArticleActions
  ) {}

  ngOnInit() {
    this.actions.fetchArticles();
  }

}
