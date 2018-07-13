import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ArticleActions } from '../article.actions';
import { IArticle, Article } from '../../models';

@Component({
  selector: 'app-article',
  templateUrl: './edit.component.html',
  styleUrls: ['../article.css']
})
export class EditComponent implements OnInit {

  @select() readonly article$: Observable<IArticle>;
  model: IArticle = new Article(0, '', '', '', new Date(), new Date());
  currentId: string;

  constructor(
    private actions: ArticleActions,
    private route: ActivatedRoute
  ) {
    this.currentId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.actions.fetchArticle(this.currentId);
    this.article$.subscribe((res) => {
      this.model = res;
    });
  }

  onSubmit() {
    this.actions.editArticle(this.model);
  }

}
