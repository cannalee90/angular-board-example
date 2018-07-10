import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';

import { ArticleActions } from '../article.actions';
import { IAppState } from '../../store';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './show.component.html',
  styleUrls: ['../article.css']
})
export class ShowComponent implements OnInit {
  // @select() readonly articles$: Observable<IArticle[]>;

  article: IArticle = new Article(11, 'This is sparta', 'hello world!', 'IronMan', new Date(), new Date());

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ArticleActions
  ) { }

  ngOnInit() {
  }
}
