import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post = {};
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.postService.getOnePost(this.route.snapshot.params['id']).subscribe(post => {
      this.post = post;
    });

  }

}
