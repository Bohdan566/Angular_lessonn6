import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {

  chosenUser!: User;

  constructor(private activatedRoure: ActivatedRoute, private userService: UserService, private router: Router) {
    this.activatedRoure.params.subscribe((value) => {
      console.log(value);
      this.chosenUser = this.router.getCurrentNavigation()?.extras.state as User;
    })
  }

  ngOnInit(): void {
    // this.activatedRoure.params.subscribe((value) => {
    //   console.log(value);
    //   this.userService.getChosenUser(value.id).subscribe(value1 => this.chosenUser = value1);
    // })
  }

}
