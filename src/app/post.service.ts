import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class PostService {
  posts: any;
  post: {};
  domain = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get(this.domain + '/posts');
}

getOnePost(id) {
  return this.http.get(this.domain + '/posts/' + id);
}

createPost(post) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.domain + '/posts', JSON.stringify(post), { headers: headers});
}

editPost(id) {
  return this.http.get(this.domain + '/posts/' + id);
}

updatePost(id, post) {
  return this.http.put(this.domain + '/posts/' + id, post );
}

deletePost(id) {
  return this.http.delete(this.domain + '/posts/' + id);
}

}
