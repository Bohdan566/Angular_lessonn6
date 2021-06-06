import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { ChosenPostComponent } from './components/chosen-post/chosen-post.component';
import {HttpClientModule} from "@angular/common/http";
import {PostResolveService} from "./services/post-resolve.service";
import {PostService} from "./services/post.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    ChosenPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostResolveService, PostService]
})
export class PostModule { }
