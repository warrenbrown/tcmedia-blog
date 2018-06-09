import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts: any;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

}
