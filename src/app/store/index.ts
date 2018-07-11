import { IArticle } from '../models';
import { ArticleActions } from '../article/article.actions';

export interface IAppState {
  articles: IArticle[];
  article: IArticle;
}

export const INITIAL_STATE: IAppState = {
  articles: [],
  article: {
    id: 0,
    creator: '',
    updatedAt: new Date(),
    createdAt: new Date(),
    content: '',
    title: '',
  },
};

export function rootReducer(state: IAppState = INITIAL_STATE, action) {
  switch (action.type) {
    case ArticleActions.FETCH_ARTICLES:
      return state;
    case ArticleActions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case ArticleActions.FETCH_ARTICLE:
      return {
        ...state,
      };
    case ArticleActions.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
  }
  return state;
}
