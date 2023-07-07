import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostformComponent } from './postform/postform.component';

const routes: Routes = [
  {
    path:'posts',component:PostsComponent
  },
  {
    path:'postsimages',component:PostformComponent
  },
  {
    path:'',redirectTo:'posts',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
