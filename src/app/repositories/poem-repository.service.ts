import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Poem } from '../models/poem.model';

@Injectable({
  providedIn: 'root',
})
export class PoemRepository {
  constructor(private http: HttpClient) {}

  getPoems(author: string): Observable<Poem[]> {
    return this.http.get<Poem[]>(environment.api + '/author/' + author);
  }
}
