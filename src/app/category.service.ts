import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoryService {
clients: any;
domain = 'http://localhost:3000/api/categories';
  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get(this.domain);
  }
}
