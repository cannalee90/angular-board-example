import { IArticle } from '../models';
import { ArticleActions } from '../article/article.actions';
import { createSelector } from 'reselect';
export interface IAppState {
  articles: IArticle[];
  article: IArticle;
  error?: any;
  filteredArticles: IArticle[];
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
  filteredArticles: [],
};

export const getContainDArticle = createSelector<IAppState, IArticle[], IArticle[]>(
  state => state.articles,
  (articles) => {
    const filtered = articles.filter((article) => article.title.includes('D'));
    return [
      ...filtered,
    ];
  }
)

export function rootReducer(state: IAppState = INITIAL_STATE, action): IAppState {
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
        filteredArticles: action.paylaod,
      };
    case ArticleActions.FETCH_ARTICLES_ERROR:
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
