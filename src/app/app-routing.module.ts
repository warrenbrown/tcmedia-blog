import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent,
    data: { title: 'Post List'}
  },

  {
    path: 'home',
    component: HomeComponent
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'post/:id',
    component: PostDetailComponent
  },
  {
    path: 'post-create',
    component: PostCreateComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'post-update/:id',
    component: PostUpdateComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
