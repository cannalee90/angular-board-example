import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ShowComponent } from './article/show/show.component';
import { ListComponent } from './article/list/list.component';
import { NewComponent } from './article/new/new.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ListComponent },
  { path: 'article/new', component: NewComponent },
  { path: 'article/:id', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
