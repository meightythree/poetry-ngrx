import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorRepository {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<string[]> {
    return this.http
      .get<{ authors: string[] }>(environment.api + '/authors')
      .pipe(map((response) => response.authors));
  }
}
