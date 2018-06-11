import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CategoryService } from '../category.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
post = {};
categories: any;
  constructor(private postService: PostService, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  savePost() {
    this.postService.createPost(this.post).subscribe(post => {
      const id = this.post['id'];
      this.router.navigateByUrl('/posts');
    });
  }

}
