import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../models/post";
import {User} from "../../../user/models/user";

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {

  chosenPost!: Post;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe((value) => {
      console.log(value);
      this.chosenPost = this.router.getCurrentNavigation()?.extras.state as Post;
    })
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((value) => {
    //   console.log(value.id);
    //   this.postService.getChosenPost(value.id).subscribe(value1 => this.chosenPost = value1);
    // })
  }

}
