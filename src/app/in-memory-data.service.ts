import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const content = `This basic app has many of the features you'd expect to find in a data-driven application.\nIt acquires and displays a list of heroes, edits a selected hero's detail, and navigates among different views of heroic data.`;
    const updatedAt = new Date();
    const createdAt = new Date();
    const articles = [
      { id: 11, creator: 'Mr. Nice', title: 'Hello Mr. Nice', content, updatedAt, createdAt },
      { id: 12, creator: 'Narco', title: 'Hello Narco', content, updatedAt, createdAt},
      { id: 13, creator: 'Bombasto', title: 'Hello Bombasto', content, updatedAt, createdAt },
      { id: 14, creator: 'Celeritas', title: 'Hello Celeritas', content, updatedAt, createdAt },
      { id: 15, creator: 'Magneta', title: 'Hello Magneta', content, updatedAt, createdAt },
      { id: 16, creator: 'RubberMan', title: 'Hello RubberMan', content, updatedAt, createdAt },
      { id: 17, creator: 'Dynama', title: 'Hello Dynama', content, updatedAt, createdAt },
      { id: 18, creator: 'Dr IQ', title: 'Hello Dr IQ', content, updatedAt, createdAt },
      { id: 19, creator: 'Magma', title: 'Hello Magma', content, updatedAt, createdAt },
      { id: 20, creator: 'Tornado', title: 'Hello Tornada', content, updatedAt, createdAt }
    ];
    return {articles};
  }
}
