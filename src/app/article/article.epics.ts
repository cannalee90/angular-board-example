import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mapTo, delay, switchMap, map, tap, filter, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ofType, combineEpics, ActionsObservable } from 'redux-observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleActions } from './article.actions';
import { IArticle } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ArticleEpics {
  private articleUrl = 'api/articles';

  constructor(private http: HttpClient, private router: Router) {
  }

  articleRootEpic() {
    return combineEpics(
      this.fetchArticles.bind(this),
      this.fetchArticle.bind(this),
      this.removeArticle.bind(this),
      this.postArticle.bind(this),
      this.editArticle.bind(this),
    );
  }

  fetchArticles (action$: ActionsObservable<any>) {
    return action$.pipe(
      ofType(ArticleActions.FETCH_ARTICLES),
      switchMap(action =>
        this.http.get<IArticle[]>(this.articleUrl).pipe(
          map(response => ({type: ArticleActions.FETCH_ARTICLES_SUCCESS, payload: response})),
          catchError((error: Error): any => of({
            type: ArticleActions.FETCH_ARTICLES_ERROR,
            error
          })),
        )
      ),
      tap(res => console.log('article finished', res)),
    );
  }

  fetchArticle (action$: ActionsObservable<any>) {
    return action$.pipe(
      ofType(ArticleActions.FETCH_ARTICLE),
      switchMap((action: any) => {
        const url = `${this.articleUrl}/${action.payload.id}`;
        return this.http.get<IArticle[]>(url).pipe(
          map(response => ({type: ArticleActions.FETCH_ARTICLE_SUCCESS, payload: response})),
          catchError((error: Error): any => of({
            type: ArticleActions.FETCH_ARTICLE_ERROR,
            error
          })),
        );
      })
    );
  }

  removeArticle (action$: ActionsObservable<any>, state$: any) {
    return action$.pipe(
      ofType(ArticleActions.REMOVE_ARTICLE),
      switchMap((action: any) => {
        const url = `${this.articleUrl}/${action.payload.id}`;
        return this.http.delete<IArticle[]>(url, httpOptions).pipe(
          tap((res) => {
            if (action.meta.nextUrl) {
              this.router.navigate([action.meta.nextUrl]);
            }
          }),
          map(res => ({type: ArticleActions.REMOVE_ARTILCE_SUCCESS})),
          catchError((error: Error): any => of({
            type: ArticleActions.REMOVE_ARTILCE_ERROR,
            error
          })),
        );
      }),
    );
  }

  postArticle (action$: ActionsObservable<any>) {
    return action$.pipe(
      ofType(ArticleActions.POST_ARTICLE),
      switchMap((action: any) => {
        return this.http.post<IArticle[]>(this.articleUrl, action.payload.article, httpOptions).pipe(
          map(res => {
            return ({type: ArticleActions.POST_ARTICLE_SUCCESS, payload: action.payload});
          }),
          tap(() => {
            if (action.meta.nextUrl) {
              this.router.navigate([action.meta.nextUrl]);
            }
          }),
          catchError((error: Error): any => of({
            type: ArticleActions.POST_ARTICLE_ERROR,
            error
          })),
        );
      })
    );
  }

  editArticle (action$: ActionsObservable<any>) {
    return action$.pipe(
      ofType(ArticleActions.EDIT_ARTICLE),
      switchMap((action: any) => {
        return this.http.post<IArticle[]>(this.articleUrl, action.payload.article, httpOptions).pipe(
          map(res => {
            return ({type: ArticleActions.EDIT_ARTICLE_SUCCESS, payload: action.payload});
          }),
          tap(() => {
            if (action.meta.nextUrl) {
              this.router.navigate([action.meta.nextUrl]);
            }
          }),
          catchError((error: Error): any => of({
            type: ArticleActions.EDIT_ARTICLE_ERROR,
            error
          })),
        );
      })
    );
  }
}
