import { TestBed, inject } from '@angular/core/testing';

import { ArticleActions } from './article.actions';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleActions]
    });
  });

  it('should be created', inject([ArticleActions], (service: ArticleActions) => {
    expect(service).toBeTruthy();
  }));
});
