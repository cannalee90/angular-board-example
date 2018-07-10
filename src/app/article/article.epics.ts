import { Injectable } from '@angular/core';
import { mapTo, delay } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

@Injectable()
export class ArticleEpics {
  static readonly FETCH_ARTICLES = 'FETCH_ARTICLES';
  static readonly FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
  static readonly FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

  constructor() {}

  articleRootEpic() {
    return combineEpics(this.fetchArticles);
  }

  fetchArticles (action$: any) {
    return action$.pipe(
      ofType(ArticleEpics.FETCH_ARTICLES),
      delay(1000),
      mapTo({type: ArticleEpics.FETCH_ARTICLES_SUCCESS}),
    );
  }
}
