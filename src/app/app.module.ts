import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';

import { CategoryService } from './category.service';
import { PostService } from './post.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    PostDetailComponent,
    PostCreateComponent,
    PostUpdateComponent,
    AuthDialogComponent,
    ToolbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule
  ],
  providers: [
    PostService,
    Angular2TokenService,
    AuthGuard,
    PostService,
    CategoryService,
    HttpClientModule,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
