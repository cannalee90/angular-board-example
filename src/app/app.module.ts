import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ArticleComponent } from './article/show/article.component';
import { ListComponent } from './article/list/list.component';

import { AppRoutingModule } from './app-routing.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger()],
      devTools.isEnabled() ? [devTools.enhancer()] : [],
    );
  }
}
