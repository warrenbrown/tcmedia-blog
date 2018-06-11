import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Angular2TokenService } from 'angular2-token';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post = {};
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    public authService: AuthService,
    public authTokenService: Angular2TokenService
  ) { }

  ngOnInit() {
    this.postService.getOnePost(this.route.snapshot.params['id']).subscribe(post => {
      this.post = post;
    });
  }

  deletePost(id) {
    this.postService.deletePost(id).subscribe(res => {
      this.router.navigate(['/posts']);
    });
  }
}
