import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostformComponent } from './postform/postform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostformComponent,NavbarComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class PostsModule { }
