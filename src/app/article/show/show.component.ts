import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';

import { ArticleActions } from '../article.actions';
import { IAppState } from '../../store';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './show.component.html',
  styleUrls: ['../article.css']
})
export class ShowComponent implements OnInit {
  @select() readonly article$: Observable<IArticle>;
  currentId: string;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ArticleActions,
    private route: ActivatedRoute,
  ) {
    this.currentId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.actions.fetchArticle(this.currentId);
  }
}
