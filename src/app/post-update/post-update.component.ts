import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
post: {};
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postService.editPost(this.route.snapshot.params['id']).subscribe(post => {
      this.post = post;
    });
  }

  updatePost() {
    this.postService.updatePost(this.route.snapshot.params['id'], this.post).subscribe(res => {
      const id = res['id'];
      this.router.navigate(['post/', id]);
    });
  }

}
