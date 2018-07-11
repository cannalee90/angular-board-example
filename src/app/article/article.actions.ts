import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { IArticle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ArticleActions {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  static readonly FETCH_ARTICLES = 'FETCH_ARTICLES';
  static readonly FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
  static readonly FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

  static readonly FETCH_ARTICLE = 'FETCH_ARTICLE';
  static readonly FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
  static readonly FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR';

  static readonly REMOVE_ARTICLE = 'REMOVE_ARTICLE';
  static readonly REMOVE_ARTILCE_SUCCESS = 'REMOVE_ARTICLE_SUCCESS';
  static readonly REMOVE_ARTILCE_ERROR = 'REMOVE_ARITLCE_ERROR';

  static readonly POST_ARTICLE = 'POST_ARTICLE';
  static readonly POST_ARTICLE_SUCCESS = 'POST_ARTICLE_SUCCESS';
  static readonly POST_ARTICLE_ERROR = 'POST_ARTICLE_ERROR';

  fetchArticles(): void {
    this.ngRedux.dispatch({ type: ArticleActions.FETCH_ARTICLES });
  }

  fetchArticle(id: string): void {
    this.ngRedux.dispatch({ type: ArticleActions.FETCH_ARTICLE, payload: {id}});
  }

  removeArticle(id: string): void {
    this.ngRedux.dispatch({
      type: ArticleActions.REMOVE_ARTICLE,
      payload: { id },
      meta: { nextUrl: '/articles' }
    });
  }

  postArticle(article: IArticle): void {
    this.ngRedux.dispatch({
      type: ArticleActions.POST_ARTICLE,
      payload: { article },
      meta: { nextUrl: '/articles' }
    });
  }
}
