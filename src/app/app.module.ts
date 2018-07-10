import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ArticleComponent } from './article/show/article.component';
import { ListComponent } from './article/list/list.component';

import { AppRoutingModule } from './app-routing.module';

import { ArticleEpics } from './article/article.epics';

const epicMiddleWare = createEpicMiddleware();

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ArticleComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
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
