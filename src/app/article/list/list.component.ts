import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';

import { ArticleActions } from '../article.actions';
import { IAppState } from '../../store';
import { IArticle } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @select() readonly articles$: Observable<IArticle[]>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ArticleActions
  ) { }

  ngOnInit() {
    this.actions.fetchArticles();
  }

}
