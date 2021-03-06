import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ShowComponent } from './article/show/show.component';
import { ListComponent } from './article/list/list.component';
import { NewComponent } from './article/new/new.component';
import { EditComponent } from './article/edit/edit.component';
import { ArticleFormComponent } from './article/shared/article.form';
import { ErrorPageComponent } from './shared/error.page.component';

import { AppRoutingModule } from './app-routing.module';

import { ArticleEpics } from './article/article.epics';

const epicMiddleWare = createEpicMiddleware();

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShowComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    ArticleFormComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [ArticleEpics],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    epics: ArticleEpics) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger(), epicMiddleWare],
      devTools.isEnabled() ? [devTools.enhancer()] : [],
    );
    epicMiddleWare.run(epics.articleRootEpic());
  }
}
