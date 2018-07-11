import { Component, OnInit } from '@angular/core';

import { ArticleActions } from '../article.actions';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './new.component.html',
  styleUrls: ['../article.css']
})
export class NewComponent implements OnInit {

  model: IArticle = new Article(0, '', '', '', new Date(), new Date());

  constructor(
    private actions: ArticleActions
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.actions.postArticle(this.model);
  }

}
