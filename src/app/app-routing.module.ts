import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorListComponent } from './pages/author-list/author-list.component';
import { PoemListComponent } from './pages/poem-list/poem-list.component';

const routes: Routes = [
  { path: 'authors', component: AuthorListComponent },
  { path: 'author/:author', component: PoemListComponent },
  { path: '**', redirectTo: 'authors' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
