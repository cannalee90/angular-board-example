export interface IArticle {
  id: number;
  content: string;
  title: string;
  creator: string;
  updatedAt: Date;
  createdAt: Date;
}

export class Article implements IArticle {
  constructor(
    public id: number,
    public content: string,
    public title: string,
    public creator: string,
    public updatedAt: Date,
    public createdAt: Date
  ) {}
}
