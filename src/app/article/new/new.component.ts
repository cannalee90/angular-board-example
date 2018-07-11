import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';

import { ArticleActions } from '../article.actions';
import { IAppState } from '../../store';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './new.component.html',
  styleUrls: ['../article.css']
})
export class NewComponent implements OnInit {

  model: IArticle = new Article(0, '', '', '', new Date(), new Date());

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: ArticleActions
  ) { }

  ngOnInit() {
  }

  submit() {
  }

}
