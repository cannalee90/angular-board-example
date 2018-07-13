import { IArticle } from '../models';
import { ArticleActions } from '../article/article.actions';

export interface IAppState {
  articles: IArticle[];
  article: IArticle;
  error?: any;
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
  error: null,
};

export function rootReducer(state: IAppState = INITIAL_STATE, action) {
  switch (action.type) {
    case ArticleActions.FETCH_ARTICLES:
      return {
        ...state,
        articles: [],
      };
    case ArticleActions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case ArticleActions.FETCH_ARTICLES_ERROR:
      console.log(action);
      return {
        ...state,
        error: action.error,
      };
    case ArticleActions.FETCH_ARTICLE:
      return {
        ...state,
        article: INITIAL_STATE.article,
      };
    case ArticleActions.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
  }
  return state;
}
