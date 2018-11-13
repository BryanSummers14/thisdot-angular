import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  private baseURL = 'https://api.github.com/search/users';
  private searchUserParams = {
    user: '',
    page: 1,
    resultsPerPage: 5
  };

  constructor(private http: HttpClient) { }

  searchUsers(): Observable<Object> {
    return this.http.get(
      `${this.baseURL}?q=${this.searchUserParams.user}&page=${this.searchUserParams.page}&per_page=${this.searchUserParams.resultsPerPage}`
      );
  }

  pageForward(): Observable<Object> {
    return this.http.get(
      `${this.baseURL}?q=${this.searchUserParams.user}&page=${++this.searchUserParams.page}&per_page=${this.searchUserParams.resultsPerPage}`
      );
  }

  pageBack(): Observable<Object> {
    return this.http.get(
      `${this.baseURL}?q=${this.searchUserParams.user}&page=${--this.searchUserParams.page}&per_page=${this.searchUserParams.resultsPerPage}`
      );
  }

  resetParams(user: string) {
    this.searchUserParams.user = user;
    this.searchUserParams.page = 1;
    this.searchUserParams.resultsPerPage = 5;
  }


}
