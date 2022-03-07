import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authorReducer } from './store/author/author-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthorEffects } from './store/author/author-effects';
import { poemReducer } from './store/poem/poem-reducer';
import { PoemListComponent } from './pages/poem-list/poem-list.component';
import { PoemEffects } from './store/poem/poem-effects';
import { PoemComponent } from './components/poem/poem.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent,
    PoemListComponent,
    PoemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({
      author: authorReducer,
      poem: poemReducer,
    }),
    EffectsModule.forRoot([AuthorEffects, PoemEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
