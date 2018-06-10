import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
post: {};
categories: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.postService.editPost(this.route.snapshot.params['id']).subscribe(post => {
      this.post = post;
    });

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  updatePost() {
    this.postService.updatePost(this.route.snapshot.params['id'], this.post).subscribe(res => {
      const id = res['id'];
      this.router.navigate(['post/', id]);
    });
  }

}
