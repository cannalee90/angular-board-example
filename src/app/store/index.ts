import { IArticle } from '../models';
import { ArticleActions } from '../article/article.actions';

const dummyArticles = [
  {id: 1, content: 'hello world 1', title: 'hello world', creator: 'kangho', updatedAt: new Date(), createdAt: new Date() },
  {id: 2, content: 'hello world 2', title: 'hello world', creator: 'kangho', updatedAt: new Date(), createdAt: new Date() },
];

export interface IAppState {
  articles: IArticle[];
}

export const INITIAL_STATE: IAppState = {
  articles: [],
};

export function rootReducer(state: IAppState = INITIAL_STATE, action) {
  switch (action.type) {
    case ArticleActions.FETCH_ARTICLES:
      return state;
    case ArticleActions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: dummyArticles,
      };
  }
  return state;
}
