import { Injectable } from '@angular/core';
import { mapTo, delay, switchMap, map, tap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { HttpClient } from '@angular/common/http';
import { ArticleActions } from './article.actions';
@Injectable()
export class ArticleEpics {
  private articleUrl = 'api/articles';

  constructor(private http: HttpClient) {
  }

  articleRootEpic() {
    return combineEpics(
      this.fetchArticles.bind(this),
    );
  }

  fetchArticles (action$: any) {
    return action$.pipe(
      ofType(ArticleActions.FETCH_ARTICLES),
      switchMap(action =>
        this.http.get<any[]>(this.articleUrl).pipe(
          map(response => ({type: ArticleActions.FETCH_ARTICLES_SUCCESS, payload: response}))
        )
      ),
      tap(res => console.log('article finished', res)),
    );
  }
}
